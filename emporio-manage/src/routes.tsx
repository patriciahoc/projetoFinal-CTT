import { Route, Switch } from "react-router-dom";

import Home from "./Componentes/pages/Home";
import Login from "./Componentes/Login";

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/" exact component={Login} />
  </Switch>
);

export default Routes;
