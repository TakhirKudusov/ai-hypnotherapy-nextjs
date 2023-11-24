import styled from "styled-components";
import InformationList from "@/components/chat/informationList";

const LeftTopBlock = () => {
  return (
    <TopBlockWrapper>
      <TitleContainer>
        <Title>
          GeniusMind<AppText>bot</AppText>
        </Title>
        <SubTitle>
          Психологический помощник на основе искусственного интеллекта!
        </SubTitle>
      </TitleContainer>
      <StyledInformationList />
    </TopBlockWrapper>
  );
};

const StyledInformationList = styled(InformationList)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SubTitle = styled.p`
  color: #2a2a2a;
  line-height: 1.4;
  font-size: 16px;
  font-weight: 500;
`;

const AppText = styled.span`
  color: #ffce11;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  bottom: 35px;
  right: 10px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 0.9;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 15px;
`;

const TopBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export default LeftTopBlock;
