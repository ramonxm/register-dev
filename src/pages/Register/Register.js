import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '../../components';
import { useAuth } from '../../contexts';
import { RegisterForm } from './forms';
import * as S from './RegisterStyled';

export const Register = () => {
  const { push } = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (user.name) {
      push('/home');
    }
  }, [user]);

  return (
    <S.ContainerRegister>
        <Avatar/>
      <S.ContentRegister>
        <RegisterForm />
      </S.ContentRegister>
    </S.ContainerRegister>
  );
};
