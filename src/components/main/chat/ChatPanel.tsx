import styled, { keyframes } from "styled-components";
import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { particleActions } from "@/components/main/particle-manager";
import { SpinnerIos } from "@styled-icons/fluentui-system-filled";
import MessageBox from "@/components/main/chat/MessageBox";
import { useStartNewDialogueMutation } from "@/redux/APIs/chatApi";
import ChatMessagesList from "@/components/main/chat/MessagesList";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import { TTextData } from "@/redux/APIs/utils/types/request/TTextData";
import Canvas from "@/components/main/Canvas";
import { THandleEndRecord } from "@/utils/types/THandleEndRecord";
import { CHAT_OPACITY } from "@/const";

type Props = {
  messages: TChatMessage[];
  isLoading: boolean;
  isError: boolean;
  makeInterferenceFromText: (arg: TTextData) => void;
  sphereWorking: boolean;
  setSphereWorking: Dispatch<SetStateAction<boolean>>;
  // handleSpeechEnd: () => void;
  sendTextLoading: boolean;
  setNewMessages: Dispatch<SetStateAction<TChatMessage[]>>;
  // handleNewMessage: THandleNewMessage;
  handleEndRecord: THandleEndRecord;
};

const ChatPanel: FC<Props> = ({
  makeInterferenceFromText,
  messages,
  isError,
  isLoading,
  setSphereWorking,
  sphereWorking,
  sendTextLoading,
  setNewMessages,
  handleEndRecord,
}) => {
  const [text, setText] = useState<string>("");
  const [chatContainerHeight, setChatContainerHeight] = useState<string>("");
  const [mic, setMic] = useState<"stop" | "start" | "dropped">();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [startNewDialogue, startnNewDialogueData] =
    useStartNewDialogueMutation();

  const changeScrollContainerHeight = useCallback(() => {
    if (!chatContainerRef.current) {
      setChatContainerHeight("100%");
      return;
    }
  }, [sphereWorking, chatContainerRef]);

  useEffect(() => {
    changeScrollContainerHeight();
  }, [changeScrollContainerHeight]);

  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("resize", changeScrollContainerHeight);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", changeScrollContainerHeight);
    };
  }, [sphereWorking]);

  const handleStartNewDDialogueClick = async () => {
    if (sphereWorking) return;
    setNewMessages([]);
    await startNewDialogue(null);
  };

  return (
    <Wrapper>
      <ChatContainer ref={chatContainerRef}>
        <SphereContainer>
          <CanvasContainer>
            <Canvas draw={particleActions.draw} />
          </CanvasContainer>
        </SphereContainer>
        <NewDialogButton onClick={handleStartNewDDialogueClick}>
          Начать новый диалог
        </NewDialogButton>

        <Container
          style={{
            maxHeight: chatContainerHeight,
          }}
        >
          <ScrollContainer id="scroll-container">
            {isError ? (
              <ErrorMessage>
                Что-то пошло не так.
                <br />
                Мы работаем над этим.
              </ErrorMessage>
            ) : (
              <ChatMessagesList messages={messages} />
            )}
          </ScrollContainer>
          <MessageBox
            isLoading={isLoading}
            setNewMessages={setNewMessages}
            sendTextLoading={sendTextLoading}
            sphereWorking={sphereWorking}
            makeInterferenceFromText={makeInterferenceFromText}
            text={text}
            setText={setText}
            setSphereWorking={setSphereWorking}
            handleEndRecord={handleEndRecord}
            setMic={setMic}
          />
        </Container>
      </ChatContainer>
    </Wrapper>
  );
};

const NewDialogButton = styled.button`
  padding: 10px;
  position: absolute;
  z-index: 5;
  background-color: #293b6c;
  top: 0;
  color: white;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  border: none;
  transition: 150ms linear;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.div`
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 1.4;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SphereContainer = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  pointer-events: none;
`;

const CanvasContainer = styled.div`
  width: 100%;
  overflow: visible;
  justify-content: center;
  display: flex;
  align-self: center;
`;

const ScrollContainer = styled.div`
  opacity: ${CHAT_OPACITY};
  height: 100%;
  overflow: auto;
  display: flex;
  flex-flow: column nowrap;
  padding: 40px 25px;
  row-gap: 40px;
  flex-direction: column-reverse;

  & > :first-child {
    margin-top: auto !important;
  }

  &::-webkit-scrollbar {
    background: none;
    width: 5px;
    height: 5px;
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

const Container = styled.div`
  width: 100%;
  transition: 300ms linear;
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
  max-width: calc(50% - 30px);
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
    max-width: unset;
  }
  @media screen and (max-width: 425px) {
    height: 550px;
  }
`;

export default memo(ChatPanel);
