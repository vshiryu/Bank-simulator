import { ILoginData } from "../../interfaces";
import { UsersContext } from "../../providers/Users";
import { loginSchema } from "../../schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { Form, Input, RedirectBtn, SendBtn, Wrapper } from "../../styles/Form";
import { Container } from "./style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const Login = (): JSX.Element => {
  const { login } = useContext(UsersContext);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (formData: ILoginData) => {
    login(formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <Wrapper>
          <label>Username</label>
          <Input {...register("username")} />
          <span>{errors.username?.message}</span>
        </Wrapper>
        <Wrapper>
          <label>password</label>
          <Input
            {...register("password")}
            type={passwordShown ? "text" : "password"}
          />
          <span>{errors.password?.message}</span>
          {!passwordShown ? (
            <AiFillEye onClick={togglePassword} />
          ) : (
            <AiFillEyeInvisible onClick={togglePassword} />
          )}
        </Wrapper>
        <SendBtn type="submit">Login</SendBtn>
        <span>Not registered yet?</span>
        <RedirectBtn
          type="button"
          onClick={() => {
            navigate(routes.register);
          }}
        >
          Register
        </RedirectBtn>
      </Form>
    </Container>
  );
};
