import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: solid 2px;
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.background.paper};
  height: 48px;
  transition-property: background-color, border-color;
  transition: 0.1s;
  cursor: ${({ isLoading }) => (isLoading ? 'wait' : 'pointer')};
`;
