import styled from "styled-components";
import bgPattern from "../../assets/pattern-bg.png";

export const MainPanelContainer = styled.div`
  background: url(${bgPattern});
  color: white;
  display: flex;
  justify-content: center;
  z-index: 999;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  text-align: center;
  width: 89%;
`;

export const Header = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
`;
