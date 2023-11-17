export type TTextMessage = {
  textResponse: string;
  userRequestText: string | undefined;
  voiceResponse: {
    contentType: "audio/ogg";
    base64Content: string;
  };
};
