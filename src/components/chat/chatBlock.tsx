import styled from "styled-components";
import StyledTextArea from "@/UI kit/styledTextArea";
import { Microphone, PaperAirplane } from "@styled-icons/heroicons-solid";
import { useState } from "react";
import BotMessage from "@/components/chat/botMessage";
import { MESSAGE_EMITTER } from "@/components/chat/utils/enums/messageEmitter.enum";
import { particleActions } from "@/components/chat/particle-manager";
import dynamic from "next/dynamic";

const Sphere = dynamic(() => import("@/components/chat/Canvas"), {
  ssr: false,
});

const ChatBlock = () => {
  const [text, setText] = useState<string>("");

  return (
    <Wrapper>
      <CanvasContainer>
        <Sphere draw={particleActions.draw} />
      </CanvasContainer>

      <Container>
        <ScrollContainer>
          <BotMessage
            emitter={MESSAGE_EMITTER.BOT}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <BotMessage
            emitter={MESSAGE_EMITTER.USER}
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem"
          />
          <BotMessage
            emitter={MESSAGE_EMITTER.BOT}
            text="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."
          />
          <BotMessage
            emitter={MESSAGE_EMITTER.USER}
            text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          />
          <BotMessage
            emitter={MESSAGE_EMITTER.BOT}
            text="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
          />
        </ScrollContainer>
        <BottomMessageWrapper>
          <StyledTextArea
            value={text}
            name="text"
            onChange={(e) => setText(e.currentTarget.value)}
            placeholder="Задайте свой вопрос..."
          />
          <IconsContainer>
            <AirPlaneIcon />
            <MicrophoneIcon />
          </IconsContainer>
        </BottomMessageWrapper>
      </Container>
    </Wrapper>
  );
};

const CanvasContainer = styled.div`
  width: 100%;
  overflow: visible;
  justify-content: center;
  display: flex;
  position: absolute;
  z-index: 0;
  top: 0;
`;

const MicrophoneIcon = styled(Microphone)`
  width: 30px;
  height: 30px;
  color: #e9e9e9;
  cursor: pointer;
  transition: 150ms linear;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  @media screen and (max-width: 1200px) {
    width: 27px;
    height: 27px;
  }
`;

const AirPlaneIcon = styled(PaperAirplane)`
  width: 30px;
  height: 30px;
  color: #e9e9e9;
  cursor: pointer;
  transition: 150ms linear;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  @media screen and (max-width: 1200px) {
    width: 27px;
    height: 27px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  padding: 40px 25px;
  row-gap: 40px;
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(170, 170, 170);
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
    border-radius: 5px;
  }
  @media screen and (max-width: 1200px) {
    padding: 15px 20px;
    row-gap: 20px;
  }
`;

const BottomMessageWrapper = styled.div`
  min-height: fit-content;
  display: flex;
  border-top: rgba(255, 255, 255, 0.05) 1px solid;
  column-gap: 10px;
  padding: 15px;
`;

const Container = styled.div`
  min-height: 66%;
  max-height: 66%;
  background-color: rgba(79, 84, 103, 0.75);
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 1;
  border-top: rgba(255, 255, 255, 0.8) 1px solid;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: 50%;
  position: sticky;
  z-index: 1;
  top: 0;
  padding-bottom: 40px;
  justify-content: flex-end;
  @media screen and (max-width: 1200px) {
    padding-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    height: 650px;
    flex-basis: unset;
  }
  @media screen and (max-width: 425px) {
    height: 550px;
  }
`;

export default ChatBlock;
