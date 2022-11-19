import * as yup from "yup";
import { SchemaOf } from "yup";
import { ILoginData, IRegisterData } from "../interfaces";

export const registerSchema: SchemaOf<IRegisterData> = yup.object().shape({
  username: yup.string().min(3).required(),
  password: yup
    .string()
    .min(8)
    .required()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      "Password must have at least one lower and uppercase letter and one number"
    ),
  name: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().required(),
});

export const loginSchema: SchemaOf<ILoginData> = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});
