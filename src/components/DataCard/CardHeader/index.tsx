import React from "react";
import { Title, Text, CardHeaderContainer } from "./styles";

export interface IHeader {
  title: string;
  text: string;
}

const CardHeader = ({ text, title }: IHeader) => {
  return (
    <CardHeaderContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </CardHeaderContainer>
  );
};

export default CardHeader;
