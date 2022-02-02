import React from "react";
import { Title, Text, CardHeaderContainer } from "./styles";

interface IProps {
  title: string;
  text: string;
}

const CardHeader = ({ text, title }: IProps) => {
  return (
    <CardHeaderContainer>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </CardHeaderContainer>
  );
};

export default CardHeader;
