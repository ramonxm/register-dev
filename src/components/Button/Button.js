import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import * as S from './ButtonStyled';

const Loading = <LoadingOutlined style={{ fontSize: 24, color: '#f9f7fd' }} spin />;

export const Button = ({ isLoading, children, ...restProps }) => {
  return (
    <S.Button {...restProps}>
      {isLoading ? <Spin indicator={Loading} /> : children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
};
