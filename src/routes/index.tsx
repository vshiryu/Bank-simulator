import { routes } from "../constants/routes";
import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";

export const Routes = (): JSX.Element => {
  const { home, login, register, dashboard } = routes;

  return (
    <Switch>
      <Route path={home} element={<Home />} />
      <Route path={login} element={<Login />} />
      <Route path={register} element={<Register />} />
      <Route path={dashboard} element={<Dashboard />} />
    </Switch>
  );
};
