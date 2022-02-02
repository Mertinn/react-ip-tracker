import React from "react";
import CardHeader from "./CardHeader";
import { CardContainer, StyledList } from "./styles";

interface IProps {
  headers: { title: string; text: string }[];
}

const DataCard = ({ headers }: IProps) => {
  return (
    <CardContainer>
      <StyledList>
        {headers.map((header) => (
          <li>
            <CardHeader title={header.title} text={header.text} />
          </li>
        ))}
      </StyledList>
    </CardContainer>
  );
};

export default DataCard;
