import styled from "styled-components";
import StyledButton from "@/UI kit/styledButton";
import { memo } from "react";

const LeftBottomBlock = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <Title>Как это работает?</Title>
        <Text>
          GeniusMind Bot&nbsp;&mdash; это ваш персональный путеводитель
          по&nbsp;внутреннему миру. Общение с&nbsp;ботом пробуждает осознанность
          и&nbsp;позволяет вам по-новому взглянуть на&nbsp;свои мысли
          и&nbsp;поступки. Он&nbsp;предлагает уникальные упражнения, которые
          помогают распознать и&nbsp;перестроить глубинные психологические
          установки, открывая путь к&nbsp;личностному росту
          и&nbsp;самосовершенствованию.
        </Text>
        <br />
        <Title>Что вы получите?</Title>
        <Text>
          Средство для глубокой саморефлексии: Ведя диалог с&nbsp;ботом,
          вы&nbsp;сможете осмыслить свои внутренние установки
          и&nbsp;поведенческие модели, и&nbsp;откорректировать&nbsp;их.
          Навигатор по&nbsp;личностным изменениям: Получите индивидуальные
          рекомендации, которые помогут вам осознать и&nbsp;переосмыслить ваше
          мышление и&nbsp;действия. Поддержка в&nbsp;самосовершенствовании:
          Благодаря GeniusMind Bot вы&nbsp;получите инструменты для развития
          новых реакций и&nbsp;подходов к&nbsp;жизненным ситуациям.
        </Text>
        {/*<Button text="пополнить" buttonSize={BUTTON_SIZE.SMALL} />*/}
      </InfoContainer>
      {/*<BannerBlock>*/}
      {/*  <BannerText>*/}
      {/*    Lorem ipsum dolor sit amet, consectetur adipiscing*/}
      {/*  </BannerText>*/}
      {/*</BannerBlock>*/}
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
