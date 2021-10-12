import { Switch, Route } from 'react-router-dom';
import { Home, Register } from '../../pages';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  );
};
