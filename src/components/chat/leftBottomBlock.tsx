import styled from "styled-components";
import { montserrat } from "@/lib/fonts";
import StyledButton from "@/UI kit/styledButton";
import { BUTTON_SIZE } from "@/UI kit/styledButton/utils/enums/buttonSize.enum";

const LeftBottomBlock = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <Title className={montserrat.className}>
          Lorem ipsum dolor sit amet, consectetur
        </Title>
        <Text className={montserrat.className}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Button text="пополнить" buttonSize={BUTTON_SIZE.SMALL} />
      </InfoContainer>
      <BannerBlock>
        <BannerText className={montserrat.className}>
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
`;

const Button = styled(StyledButton)`
  width: fit-content !important;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.4;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  column-gap: 7%;
  background-color: #f5f5f5;
  border-radius: 10px;
  flex-grow: 1;
`;

export default LeftBottomBlock;
