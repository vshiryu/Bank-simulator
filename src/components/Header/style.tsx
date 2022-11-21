import styled from "styled-components";

export const Container = styled.header`
  height: 72px;
  width: 100vw;
  color: rgba(255, 87, 127, 1);
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(33, 37, 41, 1);
  background-color: rgba(18, 18, 20, 1);
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  max-width: 800px;
`;

export const ExitBtn = styled.button`
  background: rgba(33, 37, 41, 1);
  color: white;
  border: none;
  border-radius: 5px;
  width: 80px;
  transition: 200ms;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: rgba(134, 142, 150, 1);
  }
`;
