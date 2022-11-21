import { IPropsProvider } from "../interfaces";
import { TransactionsProvider } from "./Transactions";
import { UsersProvider } from "./Users";

export const Providers = ({ children }: IPropsProvider) => {
  return (
    <UsersProvider>
      <TransactionsProvider>{children}</TransactionsProvider>
    </UsersProvider>
  );
};
