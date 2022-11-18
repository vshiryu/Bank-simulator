import { IPropsProvider } from "../interfaces";
import { UsersProvider } from "./Users";

export const Provider = ({ children }: IPropsProvider) => {
  return <UsersProvider>{children}</UsersProvider>;
};
