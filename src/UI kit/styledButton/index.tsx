import { FC, memo, MouseEventHandler } from "react";
import styled, { css, keyframes } from "styled-components";
import { BUTTON_STYLE } from "@/UI kit/styledButton/utils/enums/ButtonStyle.enum";
import { montserrat } from "@/lib/fonts";
import { SpinnerIos } from "@styled-icons/fluentui-system-filled";
import { BUTTON_SIZE } from "@/UI kit/styledButton/utils/enums/buttonSize.enum";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  name?: string;
  isLoading?: boolean;
  buttonStyle?: BUTTON_STYLE;
  className?: string;
  buttonSize?: BUTTON_SIZE;
};

const StyledButton: FC<Props> = ({
  text,
  name = "button",
  disabled,
  onClick,
  type = "button",
  isLoading,
  buttonStyle = BUTTON_STYLE.FILLED,
  className,
  buttonSize = BUTTON_SIZE.MIDDLE,
}) => {
  return (
    <Button
      className={`${className} ${montserrat.className}`}
      name={name}
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      buttonStyle={buttonStyle}
      buttonSize={buttonSize}
    >
      {isLoading ? <SpinnerIcon /> : text}
    </Button>
  );
};

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled(SpinnerIos)<{ buttonStyle: BUTTON_STYLE }>`
  animation: ${rotateAnimation} 750ms linear infinite;
  width: 24px;
  height: 24px;
  color: ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case BUTTON_STYLE.FILLED:
        return css`
          color: white;
        `;
      case BUTTON_STYLE.OUTLINED:
        return css`
          color: #4e47df;
        `;
    }
  }};
`;

const Button = styled.button<{
  buttonStyle: BUTTON_STYLE;
  buttonSize: BUTTON_SIZE;
}>`
  padding: 12px 24px;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  outline: none;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  transition: 150ms linear;
  border-radius: 10px;
  height: ${({ buttonSize }) => {
    switch (buttonSize) {
      case BUTTON_SIZE.MIDDLE:
        return 49;
      case BUTTON_SIZE.SMALL:
        return 38;
    }
  }}px;
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case BUTTON_STYLE.FILLED:
        return css`
          border: none;
          background-color: #4e47df;
          color: white;
          &:hover {
            opacity: 0.8;
          }
          &:active {
            opacity: 0.6;
          }
        `;
      case BUTTON_STYLE.OUTLINED:
        return css`
          color: #4e47df;
          border: #4e47df solid 1px;
          background-color: white;

          &:hover {
            background-color: rgba(78, 71, 223, 0.1);
          }

          &:active {
            background-color: rgba(78, 71, 223, 0.2);
          }
        `;
    }
  }}
`;

export default memo(StyledButton);
