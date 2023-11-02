"use client";

import StyledMain from "@/UI kit/styledMain";
import styled from "styled-components";
import InformationBlock from "@/components/chat/informationBlock";
import ChatBlock from "@/components/chat/chatBlock";
import InformationList from "@/components/chat/informationList";
import LeftBottomBlock from "@/components/chat/leftBottomBlock";

const Page = () => {
  return (
    <Main>
      <ContentWrapper>
        <InformationBlock />
        <ChatBlock />
        <MobileContainer>
          <InformationList />
          <LeftBottomBlock />
        </MobileContainer>
      </ContentWrapper>
    </Main>
  );
};

const MobileContainer = styled.div`
  display: none;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

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
  @media screen and (max-width: 1200px) {
    padding: 20px 20px 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    row-gap: 30px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 20px;
  }
`;

const Main = styled(StyledMain)`
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export default Page;
