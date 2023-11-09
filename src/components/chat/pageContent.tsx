"use client";

import StyledMain from "@/UI kit/styledMain";
import styled from "styled-components";
import InformationBlock from "@/components/chat/informationBlock";
import ChatBlock from "@/components/chat/chatBlock";
import InformationList from "@/components/chat/informationList";
import LeftBottomBlock from "@/components/chat/leftBottomBlock";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/routes/routes.enum";
import { useWakeLock } from "react-screen-wake-lock";
import {
  useGetChatQuery,
  useMakeInferenceFromTextMutation,
} from "@/redux/APIs/chatApi";
import { handleSuccess } from "@/components/chat/speech-manager";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";

const PageContent = () => {
  const [sphereWorking, setSphereWorking] = useState<boolean>(false);
  const [newMessages, setNewMessages] = useState<TChatMessage[]>([]);

  const router = useRouter();

  const { data, isLoading, isError } = useGetChatQuery(null);

  const [makeInterferenceFromText, textInterfData] =
    useMakeInferenceFromTextMutation();

  useEffect(() => {
    const { data } = textInterfData;
    if (data) {
      setSphereWorking(true);
      handleSuccess(handleSpeechEnd)(data.voiceResponse);
    }
  }, [textInterfData.data]);

  const messages = useMemo(
    () => (data ? [...newMessages, ...data] : newMessages),
    [data, newMessages],
  );

  const { isSupported, request } = useWakeLock({
    onRequest: () => console.log("Screen Wake Lock: requested!"),
    onError: () => console.log("An error happened 💥"),
    onRelease: () => console.log("Screen Wake Lock: released!"),
  });

  useEffect(() => {
    if (isSupported) request().catch(console.error);
  }, [isSupported]);

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
    if (!(accessToken && refreshToken)) router.push(ROUTES.HOME_AUTH);
  }, []);

  const handleSpeechEnd = () => {
    setSphereWorking(false);
  };

  return (
    <>
      {/*<Script src="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.js" />*/}
      <Main>
        <ContentWrapper>
          <InformationBlock />
          <ChatBlock
            sphereWorking={sphereWorking}
            setSphereWorking={setSphereWorking}
            makeInterferenceFromText={makeInterferenceFromText}
            isError={isError}
            isLoading={isLoading}
            messages={messages}
            handleSpeechEnd={handleSpeechEnd}
            sendTextLoading={textInterfData.isLoading}
            setNewMessages={setNewMessages}
          />
          <MobileContainer>
            <InformationList />
            <LeftBottomBlock />
          </MobileContainer>
        </ContentWrapper>
      </Main>
    </>
  );
};

const MobileContainer = styled.div`
  display: none;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  column-gap: 60px;
  max-width: 1860px;
  padding: 40px 60px 0;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    padding: 20px 20px 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    row-gap: 30px;
  }
  @media screen and (max-width: 425px) {
    row-gap: 20px;
  }
`;

const Main = styled(StyledMain)`
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export default PageContent;
