import { useEffect, useRef } from "react";
import { useMicVAD } from "@ricky0123/vad-react";
import {
  onMisfire,
  onSpeechEnd,
  onSpeechStart,
} from "@/components/chat/speech-manager";

export const useMicVADWrapper = (onLoadingChange?: (arg0: boolean) => void) => {
  const micVAD = useMicVAD({
    preSpeechPadFrames: 5,
    positiveSpeechThreshold: 0.9,
    negativeSpeechThreshold: 0.75,
    minSpeechFrames: 4,
    startOnLoad: true,
    onSpeechStart,
    onSpeechEnd,
    onVADMisfire: onMisfire,
  });

  const loadingRef = useRef(micVAD.loading);
  useEffect(() => {
    if (loadingRef.current !== micVAD.loading) {
      // onLoadingChange(micVAD.loading);
      loadingRef.current = micVAD.loading;
    }
  });

  return micVAD;
};
