import styled from 'styled-components';

export const ContainerLogin = styled.main`
  max-width: 600px;
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentLogin = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 20px;
  border-radius: 5px;;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.text.primary};
`;
