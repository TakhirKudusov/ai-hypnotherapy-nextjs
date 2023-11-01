import { FC, memo, PropsWithChildren } from "react";
import styled from "styled-components";

type Props = {
  className: string;
};

const StyledMain: FC<PropsWithChildren<any> & Props> = ({
  children,
  className,
}) => {
  return <Main className={className}>{children}</Main>;
};

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;
`;

export default memo(StyledMain);
