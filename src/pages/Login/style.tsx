import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(18, 18, 20, 1);
  gap: 20px;

  svg {
    position: relative;
    bottom: 38px;
    left: 90%;
    color: rgba(134, 142, 150, 1);
  }

  form {
    height: 400px;
  }
`;
