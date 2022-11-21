import { ReactNode } from "react";

export interface IPropsProvider {
  children: ReactNode;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IRegisterData {
  username: string;
  password: string;
  confirmPass?: string;
  name: string;
  email: string;
  age: number;
}

export interface IUserProvider {
  register: (registerData: IRegisterData) => void;
  login: (loginData: ILoginData) => void;
  user: {};
  logged: boolean;
  logout: () => void;
  token: string;
  setLogged: (logged: boolean) => void;
}

export interface ITransactionData {
  creditedUsername: string;
  value: number;
}

export interface ITransactionProvider {
  getTransaction: () => void;
  createTransaction: (transactionData: ITransactionData) => void;
  transactions: ITransactionAccount[];
}

export interface IAccount {
  id: string;
  balance: number;
  debitTransactions: Array<ITransactionAccount>;
  creditTransactions: Array<ITransactionAccount>;
}

export interface ITransactionAccount {
  id: string;
  value: number;
  createdAt: Date;
}
