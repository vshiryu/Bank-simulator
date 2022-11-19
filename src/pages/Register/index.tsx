import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterData } from "../../interfaces";
import { UsersContext } from "../../providers/Users";

export const Register = (): JSX.Element => {
  const context = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (formData: IRegisterData) => {
    console.log(formData);
    context.register(formData);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <div>
          <label>Name</label>
          <input {...register("name")} />
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <label>Username</label>
          <input {...register("username")} />
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <label>Password</label>
          <input {...register("password")} />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <label>Age</label>
          <input {...register("age")} />
          <span>{errors.age?.message}</span>
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Register
        </button>
      </form>
    </main>
  );
};
