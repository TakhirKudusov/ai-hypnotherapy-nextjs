export type TTextMessage = {
  textResponse: string;
  userRequestText: string | undefined;
  voiceResponse: {
    recordUid: string;
  };
};
