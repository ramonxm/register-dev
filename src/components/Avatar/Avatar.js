import * as S from './AvatarStyled';

export const Avatar = ({ ...restProps }) => {
  return (
  <S.ContainerAvatar {...restProps}>
    <S.Avatar src='/assets/images/Devs.jpeg' alt='Estartando Devs'/>
  </S.ContainerAvatar>
  );
};
