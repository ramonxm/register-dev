import { Button, Form, Input } from '../../../components';
import { validationRegister } from '../validations';

export const RegisterForm = () => {
  const initValues = {
    name: '',
    email1: '',
    email2: '',
    password1: '',
    password2: '',
  };
  return (
    <Form
      initialValues={initValues}
      validationSchema={validationRegister}
      onSubmit={(values) => {
        console.log(values);
      }}
      >
      <Input type='text' name='name' label='Nome completo' placeholder='Nome completo' />
      <Input type='email' name='email1' label='Informe seu email' placeholder='estartando@devs.com' />
      <Input type='email' name='email2' label='Confirme seu email' placeholder='estartando@devs.com' />
      <Input type='password' name='password1' label='Informe sua senha' placeholder='*******' />
      <Input type='password' name='password2' label='Informe sua senha' placeholder='*******' />
      <Button type='submit' >
        Cadastrar
      </Button>
  </Form>
  );
};
