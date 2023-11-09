import { backendApi } from "@/redux/APIs/backendApi";
import { TAuthData } from "@/redux/APIs/utils/types/request/TAuthData";
import { TTokenData } from "@/redux/APIs/utils/types/response/TTokenData";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";

export const accountApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    refreshToken: build.query<TTokenData, TTokenData>({
      query: (body) => ({
        url: "/Account/Refresh",
        method: "POST",
        body,
      }),
      transformResponse: (baseQueryReturnValue: TTokenData) => {
        localStorage.setItem(
          LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
          baseQueryReturnValue[LOCAL_STORAGE_ITEM.ACCESS_TOKEN],
        );
        localStorage.setItem(
          LOCAL_STORAGE_ITEM.REFRESH_TOKEN,
          baseQueryReturnValue[LOCAL_STORAGE_ITEM.REFRESH_TOKEN],
        );

        return baseQueryReturnValue;
      },
    }),
    login: build.query<TTokenData, TAuthData>({
      query: (body) => ({
        url: "/Account/Login",
        method: "POST",
        body,
      }),
    }),
    register: build.query<TTokenData, TAuthData>({
      query: (body) => ({
        url: "/Account/Register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLazyRegisterQuery, useLazyLoginQuery } = accountApi;
