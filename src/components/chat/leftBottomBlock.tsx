import styled from "styled-components";
import StyledButton from "@/UI kit/styledButton";
import { BUTTON_SIZE } from "@/UI kit/styledButton/utils/enums/buttonSize.enum";
import { memo } from "react";

const LeftBottomBlock = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <Title>Lorem ipsum dolor sit amet, consectetur</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi
        </Text>
        <Button text="пополнить" buttonSize={BUTTON_SIZE.SMALL} />
      </InfoContainer>
      <BannerBlock>
        <BannerText>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </BannerText>
      </BannerBlock>
    </Wrapper>
  );
};

const BannerText = styled.p`
  font-size: 12px;
  line-height: 1.4;
  font-weight: 600;
`;

const BannerBlock = styled.div`
  min-width: 150px;
  max-width: 150px;
  height: 100%;
  border-radius: 7px;
  background: url("/jpg/waves.jpg") bottom no-repeat white;
  padding: 20px 10px 15px 15px;
  @media screen and (max-width: 375px) {
    min-width: 120px;
    flex-grow: 1;
    height: 66%;
  }
`;

const Button = styled(StyledButton)`
  width: fit-content !important;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    row-gap: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  column-gap: 7%;
  background-color: #f5f5f5;
  border-radius: 10px;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    min-height: 190px;
  }
  @media screen and (max-width: 375px) {
    align-items: center;
  }
`;

export default memo(LeftBottomBlock);
