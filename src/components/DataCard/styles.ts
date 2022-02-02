import styled from "styled-components";
import v from "../variables";

export const CardContainer = styled.div`
  border-radius: ${v.borderRadius};
  padding: 2rem 1rem;
  background: white;
  color: black;
  margin-bottom: -60%;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
