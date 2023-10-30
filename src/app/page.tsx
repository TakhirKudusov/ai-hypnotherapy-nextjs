"use client";

import styled from "styled-components";
import LeftBlock from "@/components/auth/leftBlock";
import RightBlock from "@/components/auth/rightBlock";

export default function Home() {
  return (
    <Main>
      <LeftBlock />
      <RightBlock />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
