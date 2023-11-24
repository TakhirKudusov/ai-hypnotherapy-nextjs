"use client";

import LeftBlock from "@/components/auth/leftBlock";
import RightBlock from "@/components/auth/rightBlock";
import StyledMain from "@/UI kit/styledMain";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useCallback, useLayoutEffect } from "react";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";
import { ROUTES } from "@/routes/routes.enum";
import Script from "next/script";

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
    if (accessToken && refreshToken) router.push(ROUTES.CHAT);
  }, []);

  const handleTelegramWidgetReady = useCallback(() => {
    const widget = document.getElementById("telegram-login-kkk_login_test_bot");
    const widgetRoot = document.getElementById("telegram-widget-root");
    if (!(widget && widgetRoot)) return;
    widgetRoot.appendChild(widget);
  }, []);

  return (
    <>
      <Script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="kkk_login_test_bot"
        data-size="medium"
        data-onauth="onTelegramAuth(user)"
        data-request-access="write"
        onReady={handleTelegramWidgetReady}
      />
      <Script src="/js/telegram-widget-handler.min.js" />
      <Main>
        <>
          <LeftBlock />
          <RightBlock />
        </>
      </Main>
    </>
  );
}

const Main = styled(StyledMain)`
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: unset;
  }
`;
