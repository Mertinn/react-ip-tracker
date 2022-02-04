import styled from "styled-components";
import v from "../variables";

export const InputContainer = styled.div`
  border-radius: ${v.borderRadius};
  overflow: hidden;
  text-align: left;
  display: flex;
`;

export const Input = styled.input.attrs({ type: "text" })`
  border: none;
  outline: none;
  padding: 1.2rem;
  font-size: 1.2rem;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.5%;
`;
