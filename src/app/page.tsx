"use client";

import LeftBlock from "@/components/auth/leftBlock";
import RightBlock from "@/components/auth/rightBlock";
import StyledMain from "@/UI kit/styledMain";

export default function Home() {
  return (
    <StyledMain>
      <>
        <LeftBlock />
        <RightBlock />
      </>
    </StyledMain>
  );
}
