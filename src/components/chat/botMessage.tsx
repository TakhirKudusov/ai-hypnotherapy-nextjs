import { FC, memo } from "react";
import styled from "styled-components";
import { MESSAGE_EMITTER } from "@/components/chat/utils/enums/messageEmitter.enum";
import { PanoramaPhotosphereSelect } from "@styled-icons/material";
import { Face } from "@styled-icons/boxicons-regular";
import { TypeAnimation } from "react-type-animation";

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
        <Title>{emitter === MESSAGE_EMITTER.BOT ? "HypnoAI" : "Вы"}</Title>
        <TextContainer emitter={emitter}>
          {isLoading ? (
            <TypeAnimation
              wrapper="div"
              sequence={[text]}
              speed={30}
              cursor={false}
              repeat={1}
              style={{
                color: "white",
                fontWeight: 500,
                wordBreak: "break-all",
              }}
            />
          ) : (
            <ChatText emitter={emitter}>{text}</ChatText>
          )}
        </TextContainer>
      </TextWrapper>
    </Wrapper>
  );
};

const ChatText = styled.div<{ emitter: MESSAGE_EMITTER }>`
  line-height: 1.4;
  font-size: 13px;
  font-weight: 500;
  word-break: break-all;
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
