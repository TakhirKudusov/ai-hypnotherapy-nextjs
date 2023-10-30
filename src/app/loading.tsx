"use client";

import styled, { keyframes } from "styled-components";
import { SpinnerIos } from "@styled-icons/fluentui-system-filled";

const Loading = () => {
  return (
    <Wrapper>
      <SpinnerIcon />
    </Wrapper>
  );
};

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled(SpinnerIos)`
  width: 50px;
  height: 50px;
  color: rgba(92, 85, 228);
  animation: ${animation} linear 1000ms infinite;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
