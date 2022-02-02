import React from "react";
import { ButtonContainer, Input, InputContainer } from "./styles";
import { ReactComponent as ArrowSvg } from "../../assets/icon-arrow.svg";

const SearchInput = () => {
  return (
    <InputContainer>
      <Input />
      <ButtonContainer>
        <ArrowSvg />
      </ButtonContainer>
    </InputContainer>
  );
};

export default SearchInput;
