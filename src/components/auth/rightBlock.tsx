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
          <AppText className={spaceGrotesk.className}>app</AppText>
          <Title className={spaceGrotesk.className}>AI Hypno</Title>
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
          👈 зарегистрируйтесь, чтобы попробовать
        </BottomText>
      </RightBlockContainer>
    </RightBlockWrapper>
  );
};

const TextTypeWrapper = styled.div`
  background-color: #4f5467;
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  min-height: 68px;
  height: 100%;
  display: flex;
  align-items: center;
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
`;

const WhiteBlock = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  display: flex;
  row-gap: 20px;
  column-gap: 20px;
  border-radius: 10px;
  align-items: center;
`;

const SubTitle = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 400;
  margin-top: -5px;
`;

const AppText = styled.p`
  color: #ffce11;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  top: 10px;
  left: 145px;
`;

const Title = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 36px;
  margin-top: -10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
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
`;

export default RightBlock;
