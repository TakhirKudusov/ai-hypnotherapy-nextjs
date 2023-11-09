import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import StyledTextArea from "@/UI kit/styledTextArea";
import styled, { keyframes } from "styled-components";
import { Microphone, PaperAirplane } from "@styled-icons/heroicons-solid";
import { toast } from "react-toastify";
import { TTextData } from "@/redux/APIs/utils/types/request/TTextData";
import clsx from "clsx";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import numeral from "numeral";
import { v1 } from "uuid";
import { onSpeechStart } from "@/components/chat/speech-manager";

type Props = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setSphereWorking: Dispatch<SetStateAction<boolean>>;
  makeInterferenceFromText: (arg: TTextData) => void;
  startRecord: () => void;
  stopRecord: () => void;
  sphereWorking: boolean;
  sendTextLoading: boolean;
  setNewMessages: Dispatch<SetStateAction<TChatMessage[]>>;
};

const InputBlock: FC<Props> = ({
  makeInterferenceFromText,
  setText,
  text,
  setSphereWorking,
  startRecord,
  stopRecord,
  sphereWorking,
  sendTextLoading,
  setNewMessages,
}) => {
  const [buttonState, setButtonState] = useState<"inactive" | "active">(
    "inactive",
  );
  const [timer, setTimer] = useState<string>("600");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (buttonState === "active") {
      let time = 600;
      interval = setInterval(() => {
        time -= 1;
        setTimer(numeral(time / 10).format("00.0"));
      }, 100);
      timeout = setTimeout(() => {
        setButtonState("inactive");
        stopRecord();
      }, 60_000);
    }
    return () => {
      clearTimeout(timeout);
      clearTimeout(interval);
    };
  }, [buttonState, stopRecord]);

  useEffect(() => {
    if (buttonState === "inactive") stopRecord();
  }, [buttonState]);

  const handleStopRecording = () => {
    if (buttonState === "inactive" && sphereWorking) return;
    setTimeout(() => setButtonState("inactive"), 400);
  };

  const handleStartRecording = async () => {
    if (sphereWorking) return;
    setTimer("600");
    setButtonState("active");
    setSphereWorking(true);
    startRecord();
    onSpeechStart();
  };

  const handlePlaneButtonClick = () => {
    if (!text.length || sphereWorking || sendTextLoading) return;
    try {
      makeInterferenceFromText({ text });
      setNewMessages((prevState) => [
        {
          utcDateCreation: new Date().getUTCDate().toString(),
          actor: 0,
          text,
          isLoading: true,
          key: v1(),
        },
        ...prevState,
      ]);
      setText("");
    } catch (e) {
      console.error(e);
      toast.error("Что-то пошло не так. Пожалуйста, попробуйте снова позже.");
    }
  };

  const activeMicStyles = useMemo(
    () =>
      clsx({
        active: buttonState === "active",
      }),
    [buttonState],
  );

  return (
    <BottomMessageWrapper>
      <TextAreaWrapper>
        {buttonState === "active" && (
          <MicPointContainer>
            <MicPoint />
          </MicPointContainer>
        )}
        <TextArea
          className={activeMicStyles}
          value={buttonState === "inactive" ? text : "00:" + timer}
          name="text"
          onChange={(e) => setText(e.currentTarget.value)}
          placeholder="Задайте свой вопрос..."
        />
      </TextAreaWrapper>
      <IconsContainer>
        <AirPlaneIcon onClick={handlePlaneButtonClick} />
        <MicrophoneWrapper
          draggable="false"
          className={activeMicStyles}
          onPointerDown={handleStartRecording}
          onPointerUp={handleStopRecording}
          onMouseLeave={handleStopRecording}
          onDrag={(e) => e.preventDefault()}
        >
          <MicrophoneIcon />
        </MicrophoneWrapper>
      </IconsContainer>
    </BottomMessageWrapper>
  );
};

const pointAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
`;

const MicPoint = styled.div`
  min-width: 10px;
  min-height: 10px;
  border-radius: 7px;
  background-color: #ff5050;
  animation: ${pointAnimation} 1s linear infinite;
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const MicPointContainer = styled.div`
  width: 0;
  height: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 35px;
  left: 35px;
  @media screen and (max-width: 1200px) {
    top: 30px;
  }
`;

const TextArea = styled(StyledTextArea)`
  &.active {
    padding: 25px 50px;
    @media screen and (max-width: 1200px) {
      padding: 20px 50px;
    }
  }
`;

const MicrophoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 150ms linear;
  border-radius: 50px;
  cursor: pointer;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  &.active {
    animation: ${pointAnimation} 1.5s linear infinite;
    background-color: #2aabee;
    width: 45px;
    min-height: 45px;
    position: relative;
    bottom: 8px;
    right: 9px;
    @media screen and (max-width: 1200px) {
      width: 40px;
      min-height: 40px;
      bottom: 7px;
      right: 7px;
    }
  }
`;

const MicrophoneIcon = styled(Microphone)`
  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;
  color: #e9e9e9;
  transition: 150ms linear;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 1200px) {
    min-width: 27px;
    min-height: 27px;
    max-width: 27px;
    max-height: 27px;
  }
`;

const AirPlaneIcon = styled(PaperAirplane)`
  width: 30px;
  min-height: 30px;
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
    min-height: 27px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 27px;
  max-height: 70px;
  overflow: visible;
  @media screen and (max-width: 1200px) {
    max-height: 64px;
  }
`;

const BottomMessageWrapper = styled.div`
  min-height: fit-content;
  display: flex;
  border-top: rgba(255, 255, 255, 0.05) 1px solid;
  column-gap: 10px;
  padding: 15px;
`;

export default memo(InputBlock);
