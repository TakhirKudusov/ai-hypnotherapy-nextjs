import { particleActions } from "./particle-manager";
import { chatApi } from "@/redux/APIs/chatApi";
import { store } from "@/redux/store";
import { utils } from "@ricky0123/vad-web";
import { THandleNewMessage } from "@/utils/types/THandleNewMessage";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";
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

export const onMisfire = () => {
  particleActions.reset();
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

function getWavHeader(options: any) {
  const numFrames = options.numFrames;
  const numChannels = options.numChannels || 2;
  const sampleRate = options.sampleRate || 44100;
  const bytesPerSample = options.isFloat ? 4 : 2;
  const format = options.isFloat ? 3 : 1;

  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numFrames * blockAlign;

  const buffer = new ArrayBuffer(44);
  const dv = new DataView(buffer);

  let p = 0;

  function writeString(s: any) {
    for (let i = 0; i < s.length; i++) {
      dv.setUint8(p + i, s.charCodeAt(i));
    }
    p += s.length;
  }

  function writeUint32(d: any) {
    dv.setUint32(p, d, true);
    p += 4;
  }

  function writeUint16(d: any) {
    dv.setUint16(p, d, true);
    p += 2;
  }

  writeString("RIFF"); // ChunkID
  writeUint32(dataSize + 36); // ChunkSize
  writeString("WAVE"); // Format
  writeString("fmt "); // Subchunk1ID
  writeUint32(16); // Subchunk1Size
  writeUint16(format); // AudioFormat https://i.stack.imgur.com/BuSmb.png
  writeUint16(numChannels); // NumChannels
  writeUint32(sampleRate); // SampleRate
  writeUint32(byteRate); // ByteRate
  writeUint16(blockAlign); // BlockAlign
  writeUint16(bytesPerSample * 8); // BitsPerSample
  writeString("data"); // Subchunk2ID
  writeUint32(dataSize); // Subchunk2Size

  return new Uint8Array(buffer);
}

function getWavBytes(buffer: any, options: any) {
  const type = options.isFloat ? Float32Array : Uint16Array;
  const numFrames = buffer.byteLength / type.BYTES_PER_ELEMENT;

  const headerBytes = getWavHeader(Object.assign({}, options, { numFrames }));
  const wavBytes = new Uint8Array(headerBytes.length + buffer.byteLength);

  // prepend header, then add pcmBytes
  wavBytes.set(headerBytes, 0);
  wavBytes.set(new Uint8Array(buffer), headerBytes.length);

  return wavBytes;
}

const encodeWAV = async (audio: Blob) => {
  const wavBytes = getWavBytes(await audio.arrayBuffer(), {
    isFloat: true, // floating point or 16-bit integer
    numChannels: 2,
    sampleRate: 48000,
  });

  const wavBuffer = utils.encodeWAV(new Float32Array(wavBytes));
  return new Blob([wavBuffer], { type: "audio/wav" });
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
    // .then(handleResponse(setNewMessage))
    // .then(handleSuccess(handleSpeechEnd))
    // .catch((message: any) => {
    //   // handleSpeechEnd();
    //   handleError(message);
    // });

    // const audioFile = await store.dispatch(
    //   chatApi.endpoints.downloadRecord.initiate(
    //     (textData as any).data.data.voiceResponse.recordUid,
    //   ),
    // );

    if (!data) {
      throw new Error("Request err. No data received.");
    }

    return (textData as any).data.data.voiceResponse.recordUid;
  };

const createBody = (data: Blob) => {
  const formData = new FormData();
  formData.append("formFile", data, "audio.webm");
  return formData;
};

export const handleSuccess =
  (handleSpeechEnd: () => void) => async (uid: string) => {
    try {
      if (typeof window !== "undefined") {
        stopSourceIfNeeded();

        const accessToken = localStorage.getItem(
          LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
        );

        const sound = new Howl({
          src: `/api/Chat/DownloadRecord/${uid}?Authorization=${accessToken}`,
          html5: true,
          autoplay: true,
          volume: 0.5,
          format: "ogg",
          onend: () => {
            particleActions.reset();
            handleSpeechEnd();
          },
          onplayerror: () => {
            handleSpeechEnd();
          },
          onloaderror: () => {
            handleSpeechEnd();
          },
        });

        sound.play();

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
  const minDuration = 0.4;

  if (duration < minDuration || data.size === 0)
    throw new Error(
      `Duration is ${duration}s, which is less than minimum of ${minDuration}s`,
    );
};
