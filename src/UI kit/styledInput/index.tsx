import { ChangeEvent, FC, HTMLInputTypeAttribute, memo } from "react";
import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

type Props = {
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<any>) => void;
  className?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
};

const StyledInput: FC<Props> = ({
  className,
  name,
  required = true,
  placeholder,
  onChange,
  value,
  type = "text",
}) => {
  return (
    <Input
      className={`${className} ${montserrat.className}`}
      name={name}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

const Input = styled.input`
  transition: 0.15s linear;
  display: flex;
  width: 100%;
  color: black;
  background-color: white;
  outline: none;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid rgb(199, 199, 199);
  font-size: 14px;
  height: 50px;
  &::placeholder {
    text-transform: capitalize;
  }
  &:focus {
    border-color: rgb(159, 165, 254);
  }
  &.error {
    border-color: #ff3c3c;
  }
`;

export default memo(StyledInput);
