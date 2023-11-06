import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import { MESSAGE_EMITTER } from "@/components/chat/utils/enums/messageEmitter.enum";
import { PanoramaPhotosphereSelect } from "@styled-icons/material";
import { Face } from "@styled-icons/boxicons-regular";
import { montserrat } from "@/lib/fonts";

type Props = {
  emitter: MESSAGE_EMITTER;
  text: string;
  isLoading?: boolean;
};

const BotMessage: FC<Props> = ({ emitter, text, isLoading }) => {
  return (
    <Wrapper emitter={emitter}>
      <AvatarWrapper>
        {emitter === MESSAGE_EMITTER.BOT ? <BotIcon /> : <FaceIcon />}
      </AvatarWrapper>
      <TextWrapper>
        <Title className={montserrat.className}>
          {emitter === MESSAGE_EMITTER.BOT ? "HypnoAI" : "Вы"}
        </Title>
        <TextContainer emitter={emitter}>
          {isLoading ? (
            <LoadingContainer>
              <FirstCircle />
              <SecondCircle />
              <ThirdCircle />
            </LoadingContainer>
          ) : (
            <ChatText className={montserrat.className} emitter={emitter}>
              {text}
            </ChatText>
          )}
        </TextContainer>
      </TextWrapper>
    </Wrapper>
  );
};

const thirdCircleAnimation = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  75%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`;

const secondCircleAnimation = keyframes`
  0%{
    opacity: 1;
  }
  25%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`;

const firstCircleAnimation = keyframes`
  0%{
    opacity: 1;
  }
  15%{
    opacity: 1;
  }
  25%{
    opacity: 0;
  }
  100%{
    opacity: 0;
  }
`;

const LoadingCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: rgba(54, 56, 63, 0.85);
  animation: 1s linear infinite;
`;

const FirstCircle = styled(LoadingCircle)`
  animation-name: ${firstCircleAnimation};
`;

const SecondCircle = styled(LoadingCircle)`
  animation-name: ${secondCircleAnimation};
`;

const ThirdCircle = styled(LoadingCircle)`
  animation-name: ${thirdCircleAnimation};
`;

const LoadingContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;

const ChatText = styled.p<{ emitter: MESSAGE_EMITTER }>`
  line-height: 1.4;
  font-size: 13px;
  font-weight: 500;
  color: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "black" : "white"};
  text-align: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "start" : "end"};
  @media screen and (max-width: 1200px) {
    font-size: 11px;
  }
`;

const TextContainer = styled.div<{ emitter: MESSAGE_EMITTER }>`
  background-color: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "white" : "rgba(125,152,255)"};
  padding: 15px 15px 14px;
  border-radius: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "5px 10px 10px" : "10px 5px 10px 10px"};
  margin: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "0 20px 0 0" : "0 0 0 20px"};
  @media screen and (max-width: 1200px) {
    padding: 13px 13px 12px;
    margin: ${({ emitter }) =>
      emitter === MESSAGE_EMITTER.BOT ? "0 10px 0 0" : "0 0 0 10px"};
  }
`;

const Title = styled.p`
  color: #f7f7f7;
  font-size: 12px;
  font-weight: 500;
  @media screen and (max-width: 1200px) {
    font-size: 11px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const FaceIcon = styled(Face)`
  width: 25px;
  height: 25px;
  color: #2e2e2e;
  @media screen and (max-width: 1200px) {
    min-width: 21px;
    height: 21px;
  }
`;

const BotIcon = styled(PanoramaPhotosphereSelect)`
  width: 25px;
  height: 25px;
  color: #2e2e2e;
  @media screen and (max-width: 1200px) {
    min-width: 21px;
    height: 21px;
  }
`;

const AvatarWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  @media screen and (max-width: 1200px) {
    min-width: 35px;
    height: 35px;
  }
`;

const Wrapper = styled.div<{ emitter: MESSAGE_EMITTER }>`
  display: flex;
  column-gap: 10px;
  direction: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "ltr" : "rtl"};
`;

export default memo(BotMessage);
