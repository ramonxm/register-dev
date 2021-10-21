import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;

  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Title = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const ContainerDescription = styled.div`
  max-width: 800px;
  margin: 0 auto;

  background: ${({ theme }) => theme.palette.background.paper};

  padding: 20px;
  border-radius: 5px;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

export const Description = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const Icon = styled.img`
  max-width: 50px;
  max-height: 50px;

  margin-top: 30px;
  cursor: pointer;

  padding: 5px;
`;

export const SocialLink = styled.a`
  text-decoration: none;
`;
