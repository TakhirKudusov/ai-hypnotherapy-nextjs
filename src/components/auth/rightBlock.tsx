import styled from "styled-components";
import BlockWrapper from "@/components/auth/blockWrapper";
import { montserrat, spaceGrotesk } from "@/lib/fonts";
import { TypeAnimation } from "react-type-animation";
import { sequence } from "@/components/auth/utils/constants/sequence";

const RightBlock = () => {
  return (
    <RightBlockWrapper>
      <RightBlockContainer>
        <TitleContainer>
          <Title className={spaceGrotesk.className}>
            AI Hypno<AppText className={spaceGrotesk.className}>app</AppText>
          </Title>
          <SubTitle className={montserrat.className}>
            Lorem ipsum dolor sit amet
          </SubTitle>
        </TitleContainer>
        <WhiteBlock>
          <WhiteBlockTitleContainer className={montserrat.className}>
            <WhiteBlockTopText>Представляем</WhiteBlockTopText>
            <WBTitleInnerContainer>
              <WBTitle className={montserrat.className}>HypnoGPT</WBTitle>
              <WBSubTitle>Lorem ipsum dolor sit</WBSubTitle>
            </WBTitleInnerContainer>
          </WhiteBlockTitleContainer>
          <TextTypeWrapper>
            <TypeAnimation
              sequence={sequence}
              className={montserrat.className}
              speed={65}
              deletionSpeed={70}
              cursor={false}
              style={{
                color: "white",
                fontWeight: 500,
              }}
              repeat={Infinity}
            />
          </TextTypeWrapper>
        </WhiteBlock>
        <BottomText className={montserrat.className}>
          <EmojiSpan lg>👈</EmojiSpan> зарегистрируйтесь, чтобы попробовать{" "}
          <EmojiSpan sm>👇</EmojiSpan>
        </BottomText>
      </RightBlockContainer>
    </RightBlockWrapper>
  );
};

const EmojiSpan = styled.span<{ lg?: boolean; sm?: boolean }>`
  display: ${({ lg }) => (lg ? "inline-block" : "none")};
  @media screen and (max-width: 768px) {
    display: ${({ sm }) => (sm ? "inline-block" : "none")};
  }
`;

const TextTypeWrapper = styled.div`
  background-color: #4f5467;
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  min-height: 68px;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    min-height: 80px;
  }
`;

const WBSubTitle = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #565656;
`;

const WBTitle = styled.p`
  color: #464646;
  font-weight: 700;
  font-size: 30px;
`;

const WBTitleInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WhiteBlockTopText = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #898989;
`;

const WhiteBlockTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const BottomText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: white;
  line-height: 1.4;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const WhiteBlock = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  display: flex;
  row-gap: 20px;
  column-gap: 20px;
  border-radius: 10px;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SubTitle = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  margin-top: -5px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const AppText = styled.span`
  color: #ffce11;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  bottom: 23px;
  right: 7px;
  @media screen and (max-width: 768px) {
    bottom: 20px;
  }
`;

const Title = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 36px;
  margin-top: -10px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const RightBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
`;

const RightBlockWrapper = styled(BlockWrapper)`
  background: url("/svg/grid.svg") rgba(92, 85, 228) left no-repeat;
  background-size: 92%;
  padding: 30px 50px;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 20px 20px 30px;
    height: fit-content;
    background-position: center -25px;
    background-size: 85%;
  }
  @media screen and (max-width: 425px) {
    background-position: bottom;
    background-size: 100%;
  }
`;

export default RightBlock;
