import { particleActions } from "./particle-manager";
import { chatApi } from "@/redux/APIs/chatApi";
import { store } from "@/redux/store";
import { utils } from "@ricky0123/vad-web";
import { TTextMessage } from "@/redux/APIs/utils/types/response/TTextMessage";
import {
  AudioContext,
  IAudioBufferSourceNode,
  IAudioContext,
} from "standardized-audio-context";
import { Howl } from "howler";

let source: IAudioBufferSourceNode<IAudioContext>;
let sourceIsStarted = false;

export const onSpeechStart = () => {
  particleActions.onUserSpeaking();
  stopSourceIfNeeded();
};

export const onSpeechEnd =
  (
    handleSpeechEnd: () => void,
    setNewMessage: (botText: string, userText?: string) => void,
  ) =>
  async (audio: Blob) => {
    console.log(audio);
    if (!audio) return particleActions.reset();
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
  setNewMessage: (botText: string, userText?: string) => void,
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
  setNewMessage: (botText: string, userText?: string) => void,
) => {
  store
    .dispatch(
      chatApi.endpoints.makeInferenceFromAudio.initiate(createBody(blob)),
    )
    .then(handleResponse(setNewMessage))
    .then(handleSuccess(handleSpeechEnd))
    .catch((message: any) => {
      handleSpeechEnd();
      handleError(message);
    });
};

// function base64Encode(str: string) {
//   const encoder = new TextEncoder();
//   const data = encoder.encode(str);
//   return window.btoa(String.fromCharCode(...new Uint8Array(data)));
// }

// function base64Decode(base64: string) {
//   const binaryStr = window.atob(base64);
//   const bytes = new Uint8Array(
//     [...binaryStr].map((char) => char.charCodeAt(0)),
//   );
//   return new TextDecoder().decode(bytes);
// }

const handleResponse =
  (setNewMessage: (botText: string, userText?: string) => void) =>
  async (res: any) => {
    const { data } = res;
    if (!data) {
      throw new Error("Request err. No data received.");
    }

    setNewMessage(data.textResponse, data?.userRequestText);
    return data.voiceResponse;
  };

const createBody = (data: Blob) => {
  const formData = new FormData();
  formData.append("audioFile", data, "audio.wav");
  return formData;
};

function convertDataURIToBinary(dataURI: any) {
  if (typeof window !== "undefined") {
    const BASE64_MARKER = ";base64,";
    const base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    const base64 = dataURI.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    const array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  } else {
    throw new Error("Window in not defined");
  }
}

export const handleSuccess =
  (handleSpeechEnd: () => void) =>
  async (data: TTextMessage["voiceResponse"]) => {
    if (typeof window !== "undefined") {
      const audioContext = new AudioContext();

      const { base64Content, contentType } = data;

      const base64Data = `data:${contentType};base64,${base64Content}`;

      // const binary = convertDataURIToBinary(base64Data);
      //
      // const blob = new Blob([binary], { type: contentType });

      stopSourceIfNeeded();

      // source = audioContext.createBufferSource();
      // source.buffer = await audioContext.decodeAudioData(
      //   await blob.arrayBuffer(),
      // );
      // source.connect(audioContext.destination);
      // source.start(0);
      // sourceIsStarted = true;
      // source.onended = () => {
      //   particleActions.reset();
      //   handleSpeechEnd();
      // };

      // const audio = document.createElement("audio");
      // const source = document.createElement("source");
      //
      // audio.append(source);
      // document.body.append(audio);
      //
      // source.src = base64Data;
      // await audio.play();
      // sourceIsStarted = true;
      // audio.onended = () => {
      //   particleActions.reset();
      //   handleSpeechEnd();
      // audio.remove();
      // };

      const sound = new Howl({
        src: base64Data,
        html5: true,
        autoplay: true,
        volume: 0.5,
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
  };

const handleError = (error: { message: any }) => {
  console.log(`error encountered: ${error.message}`);
  particleActions.reset();
};

const validate = async (data: Blob) => {
  if (!data.size) return;
  const decodedData = await new AudioContext().decodeAudioData(
    await data.arrayBuffer(),
  );

  const duration = decodedData.duration;
  const minDuration = 0.4;

  if (duration < minDuration)
    throw new Error(
      `Duration is ${duration}s, which is less than minimum of ${minDuration}s`,
    );
};
