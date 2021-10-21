import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '../../components';
import { useAuth } from '../../contexts';
import { LoginForm } from './forms';
import * as S from './LoginStyled';

export const Login = () => {
  const { user, isAuthenticated } = useAuth();
  const { push } = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      push('/home');
    }
  }, [user]);

  return (
    <S.ContainerLogin>
      <Avatar/>
      <S.ContentLogin>
        <S.Title>Login</S.Title>
        <LoginForm />
      </S.ContentLogin>
    </S.ContainerLogin>
  );
};
