import { styled } from "styled-components"; 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #363b65;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #151627;
  }
`;

export const CompleteItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1e1f2e;
  border: none;
  margin-bottom: 10px;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    background-color: #151627;
  }
`;

export const TaskNameComplete = styled.span`
  width: 100%;
  color: #4d506e;
  text-decoration: line-through;
  margin-right: 10px;
  padding: 10px 15px;
  font-family: "Roboto", sans-serif;
`;

export const TaskName = styled.span`
  width: 100%;
  color: white;
  margin-right: 10px;
  padding: 10px 15px;
  font-family: "Roboto", sans-serif;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #4d506e;
  font-family: "Roboto", sans-serif;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #ff004c;
    border: none;
    color: white;
  }
`;

export const DeleteAllButton = styled.button`
  border: 1px solid #ff004c;
  background: none;
  padding: 15px;
  color: #ff004c;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 30px;

  &:hover{
    background-color: #ff004c;
    color: #fff;
    cursor: pointer;
  }
`;

export const image = styled.img`
  max-width: 100%;
`;