"use client";

import StyledMain from "@/UI kit/styledMain";
import styled from "styled-components";
import InformationBlock from "@/components/chat/InformationBlock";
import ChatBlock from "@/components/chat/chatBlock";

const Page = () => {
  return (
    <StyledMain>
      <ContentWrapper>
        <InformationBlock />
        <ChatBlock />
      </ContentWrapper>
    </StyledMain>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  column-gap: 60px;
  max-width: 1860px;
  padding: 40px 60px 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Page;
