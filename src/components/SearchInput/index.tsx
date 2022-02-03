import React, { useRef } from "react";
import { ButtonContainer, Input, InputContainer } from "./styles";
import { ReactComponent as ArrowSvg } from "../../assets/icon-arrow.svg";

interface IProps {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null!);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") return;

    onSearch(inputRef.current.value);
  };

  return (
    <InputContainer>
      <Input ref={inputRef} onKeyDown={(e) => handleKeyDown(e)} />
      <ButtonContainer onClick={() => onSearch(inputRef.current.value)}>
        <ArrowSvg />
      </ButtonContainer>
    </InputContainer>
  );
};

export default SearchInput;
