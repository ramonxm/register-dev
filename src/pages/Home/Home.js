import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts';
import { welcome } from '../../utils/constants/welcome';
import * as S from './HomeStyled';

export const Home = () => {
  const { user } = useAuth();

  return (
  <S.ContainerHome>
    <Helmet title={welcome + user.name}/>
    <S.Avatar src={user?.avatar_url} alt={user?.name} />

    <S.ContainerTitle>
      <S.Title>{user?.name}</S.Title>
    </S.ContainerTitle>

    <S.ContainerDescription>
      <S.ContentDescription>
        <S.Description>{user?.bio}</S.Description>
        <S.Description>{user?.company}</S.Description>
        <S.Description>{user?.location}</S.Description>
      </S.ContentDescription>
    </S.ContainerDescription>

    <S.SocialLink href={user?.html_url} target='_blank'>
      <S.Icon src='/assets/images/github.png' alt='github'/>
    </S.SocialLink>
  </S.ContainerHome>
  );
};
