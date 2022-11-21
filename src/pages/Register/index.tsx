import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegisterData } from "../../interfaces";
import { UsersContext } from "../../providers/Users";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { Form, Input, RedirectBtn, SendBtn, Wrapper } from "../../styles/Form";
import { Container } from "./style";

export const Register = (): JSX.Element => {
  const context = useContext(UsersContext);
  const navigate = useNavigate();

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
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <Wrapper>
          <label>Name</label>
          <Input {...register("name")} />
          <span>{errors.name?.message}</span>
        </Wrapper>
        <Wrapper>
          <label>Email</label>
          <Input {...register("email")} />
          <span>{errors.email?.message}</span>
        </Wrapper>
        <Wrapper>
          <label>Username</label>
          <Input {...register("username")} />
          <span>{errors.username?.message}</span>
        </Wrapper>
        <Wrapper>
          <label>Password</label>
          <Input {...register("password")} type="password" />
          <span>{errors.password?.message}</span>
        </Wrapper>
        <Wrapper>
          <label>Confirm password</label>
          <Input {...register("confirmPass")} type="password" />
          <span>{errors.confirmPass?.message}</span>
        </Wrapper>
        <Wrapper>
          <label>Age</label>
          <Input {...register("age")} />
          <span>{errors.age?.message}</span>
        </Wrapper>
        <SendBtn type="submit" disabled={Object.keys(errors).length > 0}>
          Register
        </SendBtn>
        <span className="btn-span">Already registered?</span>
        <RedirectBtn
          className="redirect-register-btn"
          type="button"
          onClick={() => {
            navigate(routes.login);
          }}
        >
          Login here
        </RedirectBtn>
      </Form>
    </Container>
  );
};
