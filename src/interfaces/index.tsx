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
  name: string;
  email: string;
  age: number;
}
