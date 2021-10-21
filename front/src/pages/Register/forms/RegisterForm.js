import { Button, Form, Input } from '../../../components';
import { useAuth } from '../../../contexts';
import { validationRegister } from '../validations';

export const RegisterForm = () => {
  const { registerUser, authLoading } = useAuth();

  const initValues = {
    name: '',
    email1: '',
    email2: '',
    password1: '',
    password2: '',
  };

  const handleSubmit = async (values) => {
    await registerUser(values);
  };

  return (
    <Form
      initialValues={initValues}
      validationSchema={validationRegister}
      onSubmit={handleSubmit}
      >
      <Input type='text' name='name' label='Nick do Github' placeholder='ramonxm' disabled={authLoading}/>
      <Input type='email' name='email1' label='Informe seu email' placeholder='estartando@devs.com' disabled={authLoading}/>
      <Input type='email' name='email2' label='Confirme seu email' placeholder='estartando@devs.com' disabled={authLoading}/>
      <Input type='password' name='password1' label='Informe sua senha' placeholder='*******' disabled={authLoading}/>
      <Input type='password' name='password2' label='Informe sua senha' placeholder='*******' disabled={authLoading}/>
      <Button type='submit' isLoading={authLoading} disabled={authLoading}>
        Cadastrar
      </Button>
  </Form>
  );
};
