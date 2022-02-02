import styled from "styled-components";
import v from "../../variables";

export const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Title = styled.p`
  color: ${v.darkGrey};
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15rem;
`;

export const Text = styled.h1`
  font-weight: 500;
  font-size: 1.6rem;
`;
