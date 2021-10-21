import styled from 'styled-components';

export const ContainerAvatar = styled.div`
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.palette.primary.contrastText}`};

  width: 120px;
  height: 120px;

  padding: 2px;

  margin: -20px 0;
  z-index: 1;
`;

export const Avatar = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
`;
