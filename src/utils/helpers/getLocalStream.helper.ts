export const getLocalStreamHelper = async () => {
  if (!navigator || typeof window === "undefined") return;

  try {
    let audioIN = { audio: true };

    await navigator.mediaDevices.getUserMedia(audioIN);
  } catch (e) {
    console.error(`you got an error: ${e}`);
  }
};
