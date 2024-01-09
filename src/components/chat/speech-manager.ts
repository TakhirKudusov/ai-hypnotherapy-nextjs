import { particleActions } from "./particle-manager";
import { chatApi } from "@/redux/APIs/chatApi";
import { store } from "@/redux/store";
import { THandleNewMessage } from "@/utils/types/THandleNewMessage";
import { Howl } from "howler";

let source: { stop: (arg0: number) => void };
let sourceIsStarted = false;

export const onSpeechStart = () => {
  particleActions.onUserSpeaking();
  stopSourceIfNeeded();
};

export const onSpeechEnd = async (
  handleSpeechEnd: () => void,
  setNewMessage: THandleNewMessage,
  audio: Blob | undefined,
) => {
  console.log(audio);
  if (!audio) {
    handleSpeechEnd();
    return particleActions.reset();
  }
  await processAudio(audio, handleSpeechEnd, setNewMessage);
};
const stopSourceIfNeeded = () => {
  if (source && sourceIsStarted) {
    source.stop(0);
    sourceIsStarted = false;
  }
};

const processAudio = async (
  audio: Blob,
  handleSpeechEnd: () => void,
  setNewMessage: THandleNewMessage,
) => {
  try {
    // const blob = await encodeWAV(audio);
    await validate(audio);
    sendData(audio, handleSpeechEnd, setNewMessage);
    particleActions.onProcessing();
  } catch (e) {
    console.log(e);
    particleActions.reset();
    handleSpeechEnd();
  }
};

const sendData = (
  blob: Blob,
  handleSpeechEnd: () => void,
  setNewMessage: THandleNewMessage,
) => {
  store
    .dispatch(chatApi.endpoints.transcribe.initiate(createBody(blob)))
    .then(handleResponse(setNewMessage))
    .then(handleSuccess(handleSpeechEnd))
    .catch((message: any) => {
      handleSpeechEnd();
      handleError(message);
    });
};

const handleResponse =
  (setNewMessage: THandleNewMessage) => async (res: any) => {
    const { data } = res;

    setNewMessage(data.data, 0);

    const textData = await store.dispatch(
      chatApi.endpoints.makeInferenceFromText.initiate({
        text: data.data,
      }),
    );

    console.log(textData);

    setNewMessage((textData as any).data.data.textResponse, 3);

    if (!data) {
      throw new Error("Request err. No data received.");
    }

    return {
      uid: (textData as any).data.data.voiceResponse.recordUid,
      messageLength: (textData as any).data.data.textResponse.length,
    };
  };

const createBody = (data: Blob) => {
  // const h1 = document.createElement("h1");
  const format = data.type.split("/")[1].split(";")[0];
  // h1.innerText = `audio.${format}`;
  // document.body.appendChild(h1);
  const formData = new FormData();
  formData.append("formFile", data, `audio.${format}`);
  return formData;
};

export const handleSuccess =
  (handleSpeechEnd: () => void) =>
  async ({ uid, messageLength }: { uid: string; messageLength: number }) => {
    try {
      if (typeof window !== "undefined") {
        stopSourceIfNeeded();

        const endAction = () => {
          particleActions.reset();
          handleSpeechEnd();
        };
        const sound = new Howl({
          src: `/api/Chat/DownloadRecord/${uid}`,
          autoplay: true,
          format: "mp3",
          onloaderror: messageLength ? endAction : () => {},
          onplayerror: messageLength ? endAction : () => {},
          onend: messageLength ? endAction : () => {},
        });

        // const audio = new Audio(`/api/Chat/DownloadRecord/${uid}`);
        // audio.onended = endAction;
        // audio.onerror = endAction;
        // audio.play();
        // sound.play();

        particleActions.onAiSpeaking();
      } else {
        throw new Error("Window in undefined");
      }
    } catch (e) {
      particleActions.reset();
      handleSpeechEnd();
      console.log(e);
    }
  };

const handleError = (error: { message: any }) => {
  console.log(`error encountered: ${error.message}`);
  particleActions.reset();
};

const validate = async (data: Blob) => {
  const decodedData = await new AudioContext().decodeAudioData(
    await data.arrayBuffer(),
  );

  const duration = decodedData.duration;
  const minDuration = 1.2;

  if (duration < minDuration || data.size === 0)
    throw new Error(
      `Duration is ${duration}s, which is less than minimum of ${minDuration}s`,
    );
};
