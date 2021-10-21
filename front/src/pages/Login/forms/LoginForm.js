import { Button, Form, Input } from '../../../components';
import { useAuth } from '../../../contexts';

export const LoginForm = () => {
  const { loginUser, authLoading } = useAuth();

  const initValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async ({ email, password }) => {
    await loginUser({ email, password });
  };

  return (
    <Form
      initialValues={initValues}
      onSubmit={handleSubmit}
      >
      <Input type='email' name='email' label='Email' placeholder='estartando@devs.com' disabled={authLoading}/>
      <Input type='password' name='password' label='Senha' placeholder='*******' disabled={authLoading}/>
      <Button type='submit' isLoading={authLoading}
      >
        Entrar
      </Button>
  </Form>
  );
};
