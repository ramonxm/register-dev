import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts';
import { Home, Register, Login } from '../../pages';

const CustomRoute = ({ isPrivate, ...restRoutes }) => {
  const { isAuthenticated } = useAuth();

  if (isPrivate && !isAuthenticated) {
    return <Redirect to='/' />;
  }

  return <Route {...restRoutes} />;
};

export const Routes = () => {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Register}/>
      <CustomRoute exact path="/login" component={Login}/>
      <CustomRoute isPrivate exact path="/home" component={Home}/>
    </Switch>
  );
};

CustomRoute.propTypes = {
  isPrivate: PropTypes.bool,
};
