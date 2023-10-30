import { FC, memo, PropsWithChildren } from "react";
import styled from "styled-components";

const FormInnerContainer: FC<PropsWithChildren<any>> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  row-gap: 10px;
`;

export default memo(FormInnerContainer);
