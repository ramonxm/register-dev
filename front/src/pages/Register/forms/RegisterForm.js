import { Button, Form, Input } from '../../../components';
import { useAuth } from '../../../contexts';
// import { validationRegister } from '../validations';

export const RegisterForm = () => {
  const { registerUser, authLoading } = useAuth();

  const initValues = {
    email1: '',
    email2: '',
    password1: '',
    password2: '',
  };

  const handleSubmit = async (values) => {
    const user = { email: values.email1, password: values.password1 };
    await registerUser(user);
  };

  return (
    <Form
      initialValues={initValues}
      // validationSchema={validationRegister}
      onSubmit={handleSubmit}
      >
      <Input type='email' name='email1' label='Informe seu email' placeholder='estartando@devs.com' disabled={authLoading}/>
      <Input type='email' name='email2' label='Confirme seu email' placeholder='estartando@devs.com' disabled={authLoading}/>
      <Input type='password' name='password1' label='Informe sua senha' placeholder='*******' disabled={authLoading}/>
      <Input type='password' name='password2' label='Confirme sua senha' placeholder='*******' disabled={authLoading}/>
      <Button type='submit' isLoading={authLoading}
      >
        Cadastrar
      </Button>
  </Form>
  );
};
