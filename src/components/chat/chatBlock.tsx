import styled, { keyframes } from "styled-components";
import { Microphone, PaperAirplane } from "@styled-icons/heroicons-solid";
import { useMemo, useRef, useState } from "react";
import { particleActions } from "@/components/chat/particle-manager";
import dynamic from "next/dynamic";
import {
  useGetChatQuery,
  useMakeInterferenceFromTextMutation,
} from "@/redux/APIs/chatApi";
import BotMessage from "@/components/chat/botMessage";
import { MESSAGE_EMITTER } from "@/components/chat/utils/enums/messageEmitter.enum";
import StyledTextArea from "@/UI kit/styledTextArea";
import { SpinnerIos } from "@styled-icons/fluentui-system-filled";
import { montserrat } from "@/lib/fonts";

const Sphere = dynamic(() => import("@/components/chat/Canvas"), {
  ssr: false,
});

const ChatBlock = () => {
  const [text, setText] = useState<string>("");
  const [recording, setRecording] = useState<boolean>(false);

  const { data, isLoading, isError } = useGetChatQuery(null);

  const [makeInterferenceFromText, textInterfData] =
    useMakeInterferenceFromTextMutation();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const messages = useMemo(() => data ?? [], [data]);

  const chatContainerHeight = useMemo(() => {
    if (!chatContainerRef.current) return "100%";
    return recording
      ? `${Math.floor(chatContainerRef.current?.offsetHeight * 0.66)}px`
      : `${chatContainerRef.current?.offsetHeight}px`;
  }, [recording, chatContainerRef]);

  const handleMouseChange = (value: boolean) => () => setRecording(value);

  const handlePlaneButtonClick = async () => {
    console.log(text);
    if (!text.length) return;
    try {
      await makeInterferenceFromText({ text });
    } catch (e) {
      console.error(e);
    } finally {
      setText("");
    }
  };

  return (
    <Wrapper>
      <ChatContainer ref={chatContainerRef}>
        <CanvasContainer>
          <Sphere draw={particleActions.draw} />
        </CanvasContainer>
        <Container
          style={{
            maxHeight: chatContainerHeight,
          }}
        >
          <ScrollContainer>
            {isLoading ? (
              <LoadingContainer>
                <SpinnerIcon />
              </LoadingContainer>
            ) : isError ? (
              <ErrorMessage className={montserrat.className}>
                Что-то пошло не так.
                <br />
                Мы работаем над этим.
              </ErrorMessage>
            ) : (
              <>
                <BotMessage
                  emitter={MESSAGE_EMITTER.BOT}
                  text="Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
                />
                {messages.map((el) => {
                  return (
                    <BotMessage
                      key={el.utcDateCreation}
                      emitter={
                        el.actor === 0
                          ? MESSAGE_EMITTER.USER
                          : MESSAGE_EMITTER.BOT
                      }
                      text={el.text}
                    />
                  );
                })}
                {textInterfData.isLoading && (
                  <BotMessage text="" emitter={MESSAGE_EMITTER.BOT} isLoading />
                )}
              </>
            )}
          </ScrollContainer>
          <BottomMessageWrapper>
            <StyledTextArea
              value={text}
              name="text"
              onChange={(e) => setText(e.currentTarget.value)}
              placeholder="Задайте свой вопрос..."
            />
            <IconsContainer>
              <AirPlaneIcon onClick={handlePlaneButtonClick} />
              <MicrophoneIcon
                onMouseDown={handleMouseChange(true)}
                onMouseUp={handleMouseChange(false)}
                onTouchStart={handleMouseChange(true)}
                onTouchEnd={handleMouseChange(false)}
                onMouseLeave={handleMouseChange(false)}
              />
            </IconsContainer>
          </BottomMessageWrapper>
        </Container>
      </ChatContainer>
    </Wrapper>
  );
};

const ErrorMessage = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 1.4;
`;

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled(SpinnerIos)`
  width: 35px;
  height: 35px;
  color: white;
  animation: ${animation} linear 1000ms infinite;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  width: 100%;
  transition: 300ms linear;
  background-color: rgba(79, 84, 103);
  border-radius: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 1;
  border-top: rgba(255, 255, 255, 0.1) 1px solid;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  background-color: black;
  border-radius: 10px;
`;

const Wrapper = styled.section`
  display: flex;
  height: 100%;
  flex-basis: 50%;
  position: sticky;
  z-index: 1;
  top: 0;
  padding-bottom: 40px;
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
