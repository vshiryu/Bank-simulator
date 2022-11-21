import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILoginData, IRegisterData, ITransactionData } from "../interfaces";

export const registerSchema: SchemaOf<IRegisterData> = yup.object().shape({
  username: yup.string().min(3).required(),
  password: yup
    .string()
    .min(8)
    .required()
    .matches(/([A-Z])/, "Password must contain uppercase letters")
    .matches(/([a-z])/, "Password must contain lowercase letters")
    .matches(/[0-9]/, "Password must contain numbers"),
  confirmPass: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords does not match"),
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  age: yup.number().min(0).required().typeError("Insert a valid age"),
});

export const loginSchema: SchemaOf<ILoginData> = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const transactionSchema: SchemaOf<ITransactionData> = yup
  .object()
  .shape({
    creditedUsername: yup.string().min(3).required(),
    value: yup.number().min(0.01).required().typeError("Insert a valid number"),
  });
