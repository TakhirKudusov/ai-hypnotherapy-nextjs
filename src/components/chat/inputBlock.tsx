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
import styled from "styled-components";
import { Microphone, PaperAirplane } from "@styled-icons/heroicons-solid";
import { toast } from "react-toastify";
import { TTextData } from "@/redux/APIs/utils/types/request/TTextData";
import { onSpeechStart } from "@/components/chat/speech-manager";
import { montserrat } from "@/lib/fonts";
import { getLocalStreamHelper } from "@/utils/helpers/getLocalStream.helper";
import clsx from "clsx";

type Props = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setSphereWorking: Dispatch<SetStateAction<boolean>>;
  makeInterferenceFromText: (arg: TTextData) => void;
  startRecord: () => void;
  stopRecord: () => void;
  sphereWorking: boolean;
  sendTextLoading: boolean;
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
}) => {
  const [buttonState, setButtonState] = useState<"grey" | "green">("grey");
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (buttonState === "green") {
      let time = timer;
      interval = setInterval(() => setTimer(--time), 1_000);
      timeout = setTimeout(() => {
        setButtonState("grey");
        stopRecord();
      }, 60_000);
    }
    return () => {
      clearTimeout(timeout);
      clearTimeout(interval);
    };
  }, [buttonState, stopRecord]);

  const handleRecording = async () => {
    if (sphereWorking) {
      if (buttonState === "green") {
        setButtonState("grey");
        stopRecord();
      }
      return;
    }
    await getLocalStreamHelper();
    setTimer(60);
    setButtonState("green");
    setSphereWorking(true);
    startRecord();
    onSpeechStart();
  };

  const handlePlaneButtonClick = () => {
    if (!text.length || sphereWorking || sendTextLoading) return;
    try {
      makeInterferenceFromText({ text });
      setText("");
    } catch (e) {
      console.error(e);
      toast.error("Что-то пошло не так. Пожалуйста, попробуйте снова позже.");
    }
  };

  const styles = useMemo(
    () =>
      clsx({
        disabled: sphereWorking,
      }),
    [sphereWorking],
  );

  return (
    <BottomMessageWrapper>
      <StyledTextArea
        value={text}
        name="text"
        onChange={(e) => setText(e.currentTarget.value)}
        placeholder="Задайте свой вопрос..."
      />
      <IconsContainer>
        <AirPlaneIcon onClick={handlePlaneButtonClick} className={styles} />
        <MicrophoneWrapper>
          <MicrophoneIcon
            buttonState={buttonState}
            onClick={handleRecording}
            className={styles}
          />
          {buttonState === "green" && (
            <TimerTextWrapper>
              <TimerText className={montserrat.className}>{timer}</TimerText>
            </TimerTextWrapper>
          )}
        </MicrophoneWrapper>
      </IconsContainer>
    </BottomMessageWrapper>
  );
};

const TimerTextWrapper = styled.div`
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  right: 5px;
`;

const MicrophoneWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TimerText = styled.p`
  font-size: 10px;
  color: #98e5a9;
`;

const MicrophoneIcon = styled(Microphone)<{ buttonState: "grey" | "green" }>`
  width: 30px;
  height: 30px;
  color: ${({ buttonState }) =>
    buttonState === "grey" ? "#e9e9e9" : "#98e5a9"};
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
`;

const BottomMessageWrapper = styled.div`
  min-height: fit-content;
  display: flex;
  border-top: rgba(255, 255, 255, 0.05) 1px solid;
  column-gap: 10px;
  padding: 15px;
`;

export default memo(InputBlock);
