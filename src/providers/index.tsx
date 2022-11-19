import { IPropsProvider } from "../interfaces";
import { UsersProvider } from "./Users";

export const Providers = ({ children }: IPropsProvider) => {
  return <UsersProvider>{children}</UsersProvider>;
};
