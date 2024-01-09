import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useCallback,
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
import { folder, Leva, useControls } from 'leva'
import { onSpeechStart } from "@/components/chat/speech-manager";
import { getLocalStreamHelper } from "@/utils/helpers/getLocalStream.helper";
import { THandleEndRecord } from "@/utils/types/THandleEndRecord";
import VadModule from "./vadModule";
import { useSearchParams } from "next/navigation";

const customTheme = {
  fontSizes: {
    root: '12px'
  },
  sizes: {
    rootWidth: '380px',
    controlWidth: '160px',
  },
  space: {
    rowGap: '12px',
  },
  colors: {
    elevation1: '#5976bc',
    elevation2: '#4768b5',
    elevation3: '#7d98ff',
    highlight1: '#ffffff',
    highlight2: '#ffffff'
  }
}

type Props = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setSphereWorking: Dispatch<SetStateAction<boolean>>;
  makeInterferenceFromText: (arg: TTextData) => void;
  handleEndRecord: THandleEndRecord;
  // startRecord: () => void;
  // stopRecord: () => void;
  sphereWorking: boolean;
  sendTextLoading: boolean;
  setNewMessages: Dispatch<SetStateAction<TChatMessage[]>>;
  setMic: Dispatch<SetStateAction<"stop" | "start" | "dropped" | undefined>>;
};

const InputBlock: FC<Props> = ({
  makeInterferenceFromText,
  setText,
  text,
  setSphereWorking,
  handleEndRecord,
  // startRecord,
  // stopRecord,
  sphereWorking,
  sendTextLoading,
  setNewMessages,
  setMic,
}) => {
  const [buttonState, setButtonState] = useState<"inactive" | "active">(
    "inactive",
  );
  const [timer, setTimer] = useState<string>("600");
  const [focused, setFocus] = useState<boolean>(false);
  const [secretActivatedOnce, setSecretActivatedOnce] = useState(false);
  const searchParams = useSearchParams()
  const isDebug = searchParams.get('debug') === 'true'

  const handleSecretActivationClick = () => {
    handleSecretWordClick();
    setSecretActivatedOnce(true);
  };

  const vadOptions = useControls(
    {
        positiveSpeechThreshold: {
          value: 0.15,
          min: 0,
          max: 1,
          step: 0.01,
        },
        negativeSpeechThreshold: {
          value: 1,
          min: 0,
          max: 1,
          step: 0.01,
        },
        minSpeechFrames: {
          value: 3,
          min: 0,
          max: 1000,
          step: 1,
        },
        preSpeechPadFrames: {
          value: 1,
          min: 0,
          max: 1000,
          step: 1,
        },
        redemptionFrames: {
          value: 8,
          min: 0,
          max: 1000,
          step: 1,
        },
    }
  )
  console.log('vadOptions: ', vadOptions);

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
        queueMicrotask(() => {
          // stopRecord();
        });
      }, 60_000);
    }
    return () => {
      clearTimeout(timeout);
      clearTimeout(interval);
    };
  }, [buttonState]);

  useEffect(() => {
    if (buttonState === "inactive")
      queueMicrotask(() => {
        // stopRecord();
      });
  }, [buttonState]);

  const handleStopRecording = () => {
    if (buttonState === "inactive" && sphereWorking) return;
    setMic("stop");
    setTimeout(() => {
      setButtonState("inactive");
    }, 300);
  };

  const handleDropRecording = () => {
    if (buttonState === "inactive" && sphereWorking) return;
    setMic("dropped");
    setTimeout(() => {
      setButtonState("inactive");
    }, 300);
  };

  const handleStartRecording = async () => {
    if (sphereWorking) return;
    await getLocalStreamHelper();
    setTimer("600");
    setButtonState("active");
    setSphereWorking(true);
    // startRecord();
    onSpeechStart();
  };

  const handlePlaneButtonClick = useCallback(() => {
    if (!text.length || sphereWorking || sendTextLoading) return;
    try {
      makeInterferenceFromText({ text });
      setNewMessages((prevState) => [
        {
          utcDateCreation: new Date().getUTCDate().toString(),
          actor: 0,
          text,
          isLoading: true,
          key: v1() + new Date().getUTCDate().toString(),
        },
        ...prevState,
      ]);
      setText("");
      setTimeout(() => {
        const scrollContainer = document.getElementById("scroll-container");
        scrollContainer?.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 500);
    } catch (e) {
      console.error(e);
      toast.error("Что-то пошло не так. Пожалуйста, попробуйте снова позже.");
    }
  }, [
    makeInterferenceFromText,
    sendTextLoading,
    setNewMessages,
    setText,
    sphereWorking,
    text,
  ]);

  const handleSecretWordClick = useCallback(() => {
    try {
      makeInterferenceFromText({ text: "34test8129" });
    } catch (e) {
      console.error(e);
      toast.error("Что-то пошло не так. Пожалуйста, попробуйте снова позже.");
    }
  }, [makeInterferenceFromText]);

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter" && focused) handlePlaneButtonClick();
    },
    [focused, handlePlaneButtonClick],
  );

  const activeMicStyles = useMemo(
    () =>
      clsx({
        active: buttonState === "active",
      }),
    [buttonState],
  );

  const isDisabled = useMemo(
    () =>
      clsx({
        disabled: sphereWorking || sendTextLoading,
      }),
    [sphereWorking, sendTextLoading],
  );

  useEffect(() => {
    getLocalStreamHelper();
    if (typeof window !== "undefined")
      window.addEventListener("keydown", handleKeyEvent);

    return () => window.removeEventListener("keydown", handleKeyEvent);
  }, [handleKeyEvent]);

  return (
    <BottomMessageWrapper>
      <Leva
        theme={customTheme}
        hidden={!isDebug}
      />
      {!secretActivatedOnce && (
        <StartButtonContainer>
          <StartButton onClick={handleSecretActivationClick}>start</StartButton>
        </StartButtonContainer>
      )}
      {secretActivatedOnce && <>
        {!(buttonState === "inactive" && sphereWorking) && (
          <VadModule
            options={vadOptions}
            handleEndRecord={handleEndRecord}
            handleStopRecording={handleStopRecording}
            handleStartRecording={handleStartRecording}
          ></VadModule>
        )}

        {buttonState === "active" ? (
          <MicrophoneAreaWrapper>
            <IconsContainer>
              <MicrophoneWrapper
                className={activeMicStyles}
              >
                <MicrophoneIcon className={isDisabled} />
              </MicrophoneWrapper>
            </IconsContainer>
            <MicPointContainer>
              <MicPoint />
            </MicPointContainer>
            <MicrophoneText>
              {"00:" + timer}
            </MicrophoneText>
          </MicrophoneAreaWrapper>
        ) : (
          <MicrophoneAreaWrapper>
            {!sphereWorking && <MicrophoneText>{"Скажи что-нибудь"}</MicrophoneText>}
          </MicrophoneAreaWrapper>
        )}
        {isDebug &&
          <>
            <TextAreaWrapper>
              <TextArea
                className={activeMicStyles}
                value={buttonState === "inactive" ? text : "00:" + timer}
                name="text"
                onChange={(e) => setText(e.currentTarget.value)}
                placeholder="Задайте свой вопрос..."
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
              />
            </TextAreaWrapper>
            <IconsContainer onDrag={(e) => e.preventDefault()}>
              <AirPlaneIcon onClick={handlePlaneButtonClick} className={isDisabled} />
              <MicrophoneWrapper
                draggable="false"
                className={activeMicStyles}
                onPointerDown={handleStartRecording}
                onPointerUp={handleStopRecording}
                onMouseLeave={handleDropRecording}
                onDrag={(e) => e.preventDefault()}
              // onClick={handleSecretActivationClick}
              >
                <MicrophoneIcon className={isDisabled} />
              </MicrophoneWrapper>
            </IconsContainer>
          </>}
      </>}
    </BottomMessageWrapper>
  );
};

const StartButton = styled.div`
  height: 70px;
  width: 100%;
  background-color: #5976bc;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 5px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 150ms linear;
  &:hover {
    background-color: #708ace;
  }

  &:active {
    background-color: #819bdc;
  }

  @media screen and (max-width: 1200px) {
    height: 59px;
    font-size: 16px;
  }
`;

const StartButtonContainer = styled.div`
  min-height: 70px;
  max-height: 70px;
  @media screen and (max-width: 1200px) {
    min-height: 59px;
    max-height: 59px;
  }
  display: contents;
  overflow: visible;
  z-index: 10;
  position: absolute;
  width: calc(100% - 29px);
`;

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

const MicrophoneAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 70px;
  max-height: 70px;
  align-items: center;
  padding: 10px;
  @media screen and (max-width: 1200px) {
    min-height: 59px;
    max-height: 59px;
  }
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const MicrophoneText = styled.div`
  width: 100%;
  align-self: center;
  padding: 15px;
  color: white;
`;

const MicPointContainer = styled.div`
  width: 0;
  height: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -15px;
  @media screen and (max-width: 1200px) {
    top: -12px;
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
    background-color: #00a2ff;
    width: 45px;
    min-height: 45px;
    position: relative;
    // bottom: 8px;
    right: 9px;
    @media screen and (max-width: 1200px) {
      width: 33px;
      min-height: 33px;
      // bottom: 5px;
      right: 5px;
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

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 1200px) {
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }

  &.disabled {
    opacity: 0.8;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.8;
    }
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
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }

  &.disabled {
    opacity: 0.8;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.8;
    }
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
