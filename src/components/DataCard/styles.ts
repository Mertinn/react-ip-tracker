import styled from "styled-components";
import v from "../variables";

export const CardContainer = styled.div`
  border-radius: ${v.borderRadius};
  padding: 2rem 1rem;
  background: white;
  color: black;
  margin-bottom: -50px;
  width: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${v.desktopWidth}) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;

    li {
      width: 25%;
    }
    li:not(:last-child) {
      border-right: 1px solid ${v.darkGrey};
    }
  }
`;
