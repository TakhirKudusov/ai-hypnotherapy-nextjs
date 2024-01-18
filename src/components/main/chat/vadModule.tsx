import { FC, memo } from "react";
import { THandleEndRecord } from "@/utils/types/THandleEndRecord";
import { useMicVAD, utils } from "@ricky0123/vad-react";

// fix problems of not working vad module,
// cause without this it cant see necessary files to initialize webassembly
// take fix from here https://github.com/ricky0123/vad/issues/24#issuecomment-1826408126
// where "/_next/static/*" path to files, copied in next.config.js file by CopyPlugin
// from here https://wiki.vad.ricky0123.com/en/docs/user/browser in Bundling section
import * as ort from "onnxruntime-web";
ort.env.wasm.wasmPaths = "/_next/static/";
const vadOptions = {
  modelURL: "/_next/static/silero_vad.onnx",
  workletURL: "/_next/static/vad.worklet.bundle.min.js",
  startOnLoad: true,
};

type Props = {
  handleEndRecord: THandleEndRecord;
  handleStopRecording: () => void;
  handleStartRecording: () => void;
};

const VadModule: FC<Props> = ({
  handleEndRecord,
  handleStopRecording,
  handleStartRecording,
}) => {
  useMicVAD({
    ...vadOptions,
    onSpeechEnd: async (audio) => {
      const wavBuffer = utils.encodeWAV(audio);
      const wav = new Blob([wavBuffer], { type: "audio/wav" });
      console.log("SPEECH END");
      handleStopRecording();
      handleEndRecord(wav);
    },
    onSpeechStart: () => {
      console.log("SPEECH START");
      handleStartRecording();
    },
  });

  return false;
};

export default memo(VadModule);
