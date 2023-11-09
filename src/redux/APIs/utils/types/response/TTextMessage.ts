export type TTextMessage = {
  textResponse: string;
  voiceResponse: {
    contentType: "audio/ogg";
    base64Content: string;
  };
};
