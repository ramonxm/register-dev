import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { masks } from '../../utils/masks';
import * as S from './InputStyled';

export const Input = ({
  label, mask, name, id, ...props
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const { target } = e;
    const maskedValue = masks[mask || 'standard'](target?.value || '');
    setFieldValue(name, maskedValue);
  };
  return (
    <S.InputWrapper>
      <S.Label htmlFor={id || name}>{label}</S.Label>
      <S.Input
        {...field}
        {...props}
        $error={meta.error && meta.touched}
        name={name}
        id={id}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      {meta.touched && meta.error ? (
        <S.MessageError>
          {meta.error}
        </S.MessageError>
      ) : null}
    </S.InputWrapper>

  );
};

Input.propTypes = {
  mask: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
