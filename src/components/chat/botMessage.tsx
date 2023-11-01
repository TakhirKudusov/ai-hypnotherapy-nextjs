import { FC, memo } from "react";
import styled from "styled-components";
import { MESSAGE_EMITTER } from "@/components/chat/utils/enums/messageEmitter.enum";
import { PanoramaPhotosphereSelect } from "@styled-icons/material";
import { Face } from "@styled-icons/boxicons-regular";
import { montserrat } from "@/lib/fonts";

type Props = {
  emitter: MESSAGE_EMITTER;
  text: string;
};

const BotMessage: FC<Props> = ({ emitter, text }) => {
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
          <ChatText className={montserrat.className} emitter={emitter}>
            {text}
          </ChatText>
        </TextContainer>
      </TextWrapper>
    </Wrapper>
  );
};

const ChatText = styled.p<{ emitter: MESSAGE_EMITTER }>`
  line-height: 1.4;
  font-size: 13px;
  font-weight: 500;
  color: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "black" : "white"};
`;

const TextContainer = styled.div<{ emitter: MESSAGE_EMITTER }>`
  background-color: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "white" : "#7D98FF"};
  padding: 15px 15px 14px;
  border-radius: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "5px 10px 10px" : "10px 5px 10px 10px"};
  margin: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "0 20px 0 0" : "0 0 0 20px"};
`;

const Title = styled.p`
  color: #f7f7f7;
  font-size: 12px;
  font-weight: 500;
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
`;

const BotIcon = styled(PanoramaPhotosphereSelect)`
  width: 25px;
  height: 25px;
  color: #2e2e2e;
`;

const AvatarWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;

const Wrapper = styled.div<{ emitter: MESSAGE_EMITTER }>`
  display: flex;
  column-gap: 10px;
  direction: ${({ emitter }) =>
    emitter === MESSAGE_EMITTER.BOT ? "ltr" : "rtl"};
`;

export default memo(BotMessage);
