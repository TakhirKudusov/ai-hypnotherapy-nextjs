import styled from "styled-components";
import { ChangeEvent, FC, memo } from "react";
import { montserrat } from "@/lib/fonts";

type Props = {
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  required?: boolean;
};

const StyledTextArea: FC<Props> = ({
  placeholder,
  name,
  required = true,
  className,
  value,
  onChange,
}) => {
  return (
    <TextArea
      className={`${className} ${montserrat.className}`}
      placeholder={placeholder}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
  );
};

const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  color: white;
  border: none;
  outline: none;
  resize: none;
  min-height: 60px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(170, 170, 170);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 5px;
  }
  &::placeholder {
    color: white;
  }
  @media screen and (max-width: 1200px) {
    min-height: 59px;
  }
`;

export default memo(StyledTextArea);
