"use client";

import StyledMain from "@/UI kit/styledMain";
import styled from "styled-components";
import InformationBlock from "@/components/chat/InformationBlock";
import ChatBlock from "@/components/chat/chatBlock";

const Page = () => {
  return (
    <Main>
      <InformationBlock />
      <ChatBlock />
    </Main>
  );
};

const Main = styled(StyledMain)`
  padding: 40px 60px 0;
  column-gap: 60px;
`;

export default Page;
