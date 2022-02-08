import styled from "styled-components";
import bgPattern from "../../assets/pattern-bg.png";
import v from "../variables";

export const MainPanelContainer = styled.div`
  background: url(${bgPattern});
  background-position-x: 70%;
  color: white;
  display: flex;
  justify-content: center;
  z-index: 999;

  @media (min-width: ${v.desktopWidth}) {
    background-size: cover;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  text-align: center;
  width: 89%;
  margin-top: 2rem;
  margin-bottom: -3em;
`;

export const Header = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  @media (min-width: ${v.desktopWidth}) {
    width: 70%;
  }
`;
