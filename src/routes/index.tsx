import { routes } from "../constants/routes";
import { Routes as Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Routes = (): JSX.Element => {
  const { home, login, register } = routes;

  return (
    <Switch>
      <Route path={home} element={<Home />} />
      <Route path={login} element={<Login />} />
      <Route path={register} element={<Register />} />
    </Switch>
  );
};
