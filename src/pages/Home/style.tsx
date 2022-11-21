import styled from "styled-components";

interface IProps {
  amount: number;
}

export const Container = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(18, 18, 20, 1);
  color: white;

  form {
    margin-top: 20px;
    height: 300px;
  }
`;

export const Balance = styled.section`
  margin-top: 90px;
  margin-left: 40%;
  display: flex;
  width: 100%;
  align-items: center;

  span {
    width: 65px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: center;
`;

export const Card = styled.li<IProps>`
  display: flex;
  flex-direction: column;
  background-color: rgba(33, 37, 41, 1);
  width: 100%;
  padding: 10px 10px 10px 40px;
  height: 90px;
  border-radius: 5px;
  justify-content: space-around;
  margin: 10px 0;

  span {
    color: ${(props) => (props.amount < 0 ? "red" : "green")};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    width: 850px;

    section {
      width: 45%;
    }
  }
`;

export const DateBtn = styled.button`
  background-color: rgba(255, 66, 127, 1);
  color: white;
  padding: 3px;
  border: none;
  border-radius: 5px;
`;

export const Select = styled.select`
  background-color: rgba(255, 66, 127, 1);
  color: white;
  padding: 2px;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
`;
