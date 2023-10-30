import { FC, memo, PropsWithChildren } from "react";
import styled from "styled-components";
import { montserrat } from "@/lib/fonts";

type Props = {
  errorMessage: string;
  touched: boolean;
};

const InputWrapper: FC<Props & PropsWithChildren<any>> = ({
  children,
  errorMessage,
  touched,
}) => {
  return (
    <Wrapper>
      {children}
      {errorMessage && touched && (
        <ErrorText className={montserrat.className}>{errorMessage}</ErrorText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 6px;
`;

const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ff3c3c;
`;

export default memo(InputWrapper);
