import styled from "styled-components";
import { FC, PropsWithChildren } from "react";

type Props = {
  className: string;
};

const BlockWrapper: FC<PropsWithChildren<any> & Props> = ({
  children,
  className,
}) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 100%;
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
  flex-direction: column;
`;

export default BlockWrapper;
