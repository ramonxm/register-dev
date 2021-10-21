import { Helmet } from 'react-helmet';
import { useAuth } from '../../contexts';
import { welcome } from '../../utils/constants/welcome';
import * as S from './HomeStyled';

export const Home = () => {
  const { user } = useAuth();

  return (
  <S.ContainerHome>
    <Helmet title={welcome + user.email}/>
    <S.Avatar src={user?.avatar_url || '/assets/images/Devs.jpeg'} alt={user?.name || 'placeholder'} />

    <S.ContainerTitle>
      <S.Title>{user?.email}</S.Title>
    </S.ContainerTitle>

    <S.ContainerDescription>
      <S.ContentDescription>
        <S.Description>{user?.bio || 'Aqui seria sua Bio!'}</S.Description>
        <S.Description>{user?.company || 'Aqui seria sua compania'}</S.Description>
        <S.Description>{user?.location || 'Aqui seria sua localização'}</S.Description>
      </S.ContentDescription>
    </S.ContainerDescription>

    <S.SocialLink href={user?.html_url || 'http://github.com'} target='_blank'>
      <S.Icon src='/assets/images/github.png' alt='github'/>
    </S.SocialLink>
  </S.ContainerHome>
  );
};
