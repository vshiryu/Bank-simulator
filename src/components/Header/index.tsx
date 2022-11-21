import { useContext, useEffect } from "react";
import { UsersContext } from "../../providers/Users";
import { useLocation } from "react-router-dom";
import { routes } from "../../constants/routes";
import { Container, ExitBtn, Wrapper } from "./style";

export const Header = (): JSX.Element => {
  const location = useLocation();
  const { logout } = useContext(UsersContext);

  return (
    <Container>
      <Wrapper>
        <h1>Bank</h1>
        {location.pathname === routes.home && (
          <ExitBtn onClick={logout}>Logout</ExitBtn>
        )}
      </Wrapper>
    </Container>
  );
};
