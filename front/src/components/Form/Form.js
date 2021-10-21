import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { ContainerForm } from './FormStyled';

export const Form = ({
  children, ...restProps
}) => {
  return (
    <Formik
      {...restProps}
    >
      <ContainerForm>{children}</ContainerForm>
    </Formik>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
