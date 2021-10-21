import styled from 'styled-components';

export const ContainerRegister = styled.main`
  max-width: 600px;
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentRegister = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.palette.background.paper};
  padding: 20px;
  border-radius: 5px;;
`;

export const RedirectToLogin = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};

  display: flex;
  gap: 3px;
  justify-content: center;

  & a {
    color: ${({ theme }) => theme.palette.design.dark};
  }
`;
