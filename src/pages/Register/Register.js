import { Avatar } from '../../components';
import { RegisterForm } from './forms';
import * as S from './RegisterStyled';

export const Register = () => {
  return (
    <S.ContainerRegister>
        <Avatar/>
      <S.ContentRegister>
        <RegisterForm />
      </S.ContentRegister>
    </S.ContainerRegister>
  );
};
