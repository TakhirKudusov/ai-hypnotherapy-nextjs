"use client";

import LeftBlock from "@/components/auth/leftBlock";
import RightBlock from "@/components/auth/rightBlock";
import StyledMain from "@/UI kit/styledMain";
import styled from "styled-components";

export default function Home() {
  return (
    <Main>
      <>
        <LeftBlock />
        <RightBlock />
      </>
    </Main>
  );
}

const Main = styled(StyledMain)`
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: unset;
  }
`;
