import styled from "styled-components";
import v from "../variables";

export const InputContainer = styled.div`
  border-radius: ${v.borderRadius};
  overflow: hidden;
  text-align: left;
  display: flex;
  width: 100%;
`;

export const Input = styled.input.attrs({ type: "text" })`
  border: none;
  outline: none;
  padding: 1.2rem;
  font-size: 1.2rem;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.7rem;
`;
