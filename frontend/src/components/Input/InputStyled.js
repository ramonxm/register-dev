import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  width: 100%;
  border: ${({ theme, $error }) => ($error
    ? `1px solid ${theme.palette.error.main}`
    : `1px solid ${theme.palette.design.contrastText}`)};
  outline: none;
  padding: 10px;
  margin: 5px 0;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageError = styled.div`
  color: ${({ theme }) => theme.palette.error.main};
`;
