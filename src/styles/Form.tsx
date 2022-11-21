import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(33, 37, 41, 1);
  box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px rgba(0, 0, 0, 0.25);
  width: 90vw;
  max-width: 370px;
  color: white;
  border-radius: 5px;
  padding: 20px;
`;

export const Input = styled.input`
  background: rgba(52, 59, 65, 1);
  height: 40px;
  border: 1.22px solid rgba(248, 249, 250, 1);
  border-radius: 5px;
  margin-top: 10px;
  color: rgba(248, 249, 250, 1);
  padding-left: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  font-size: 0.8rem;

  span {
    height: 12px;
    color: red;
  }
`;

export const SendBtn = styled.button`
  background: rgba(255, 66, 127, 1);
  color: white;
  height: 38px;
  width: 80%;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: 200ms;
  cursor: pointer;
`;

export const RedirectBtn = styled.button`
  background: rgba(52, 59, 65, 1);
  color: white;
  height: 38px;
  width: 80%;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: 200ms;
  cursor: pointer;
`;
