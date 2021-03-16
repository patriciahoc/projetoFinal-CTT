import { Route, Switch } from "react-router-dom";

import Home from "./Componentes/pages/Home";
import Login from "./Componentes/Login";
import Emporio from "./Componentes/Emporio";
import Products from "./Componentes/pages/Products";
import ControlUsers from "./Componentes/pages/ControlUsers";
import FormUser from "./Componentes/pages/RegisterUser";
import FormProducts from "./Componentes/pages/RegisterProducts";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Home} />
    <Route path="/emporio" exact component={Emporio} />
    <Route path="/produtos" exact component={Products} />
    <Route path="/cadastro-produtos" exact component={FormProducts} />
    <Route path="/cadastro-usuarios" exact component={FormUser} />
    <Route path="/controle-usuarios" exact component={ControlUsers} />
  </Switch>
);

export default Routes;
