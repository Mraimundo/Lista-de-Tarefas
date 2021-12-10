import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;

  .image {
    margin-right: 5px;
    font-size: 32px;
  }

  input {
    border: 0;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`;
