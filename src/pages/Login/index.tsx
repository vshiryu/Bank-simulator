import { ILoginData } from "../../interfaces";
import { UsersContext } from "../../providers/Users";
import { loginSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

export const Login = (): JSX.Element => {
  const { login } = useContext(UsersContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (formData: ILoginData) => {
    console.log(formData);
    login(formData);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input {...register("username")} />
          <span>{errors.username?.message}</span>
        </div>
        <div>
          <label>password</label>
          <input {...register("password")} />
          <span>{errors.password?.message}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};
