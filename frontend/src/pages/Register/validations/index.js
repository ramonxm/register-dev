import * as yup from 'yup';

export const validationRegister = yup.object().shape({
  name: yup.string().required('Necessário informar nome completo'),
  email1: yup.string().email().required('Necessário informar e-mail'),
  email2: yup.string().email().oneOf([yup.ref('email1'), null], 'Entre com o mesmo email!'),
  password1: yup.string().nullable().min(6, 'É obrigatório ter no mínimo 6 caracteres!').required('Entre com uma senha'),
  password2: yup.string().nullable().min(6, 'É obrigatório ter no mínimo 6 caracteres!').oneOf([yup.ref('password1'), null], 'Entre com a mesma senha'),
});
