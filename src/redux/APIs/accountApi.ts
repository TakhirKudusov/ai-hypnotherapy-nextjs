import { backendApi } from "@/redux/APIs/backendApi";
import { TAuthData } from "@/redux/APIs/utils/types/request/TAuthData";
import { TTokenData } from "@/redux/APIs/utils/types/response/TTokenData";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";
import { TResponse } from "@/redux/APIs/utils/types/response/TResponse";

export const accountApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    refreshToken: build.query<TResponse<TTokenData>, TTokenData>({
      query: (body) => ({
        url: "/Account/Refresh",
        method: "POST",
        body,
      }),
      transformResponse: (baseQueryReturnValue: TResponse<TTokenData>) => {
        localStorage.setItem(
          LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
          baseQueryReturnValue.data[LOCAL_STORAGE_ITEM.ACCESS_TOKEN],
        );
        localStorage.setItem(
          LOCAL_STORAGE_ITEM.REFRESH_TOKEN,
          baseQueryReturnValue.data[LOCAL_STORAGE_ITEM.REFRESH_TOKEN],
        );

        return baseQueryReturnValue;
      },
    }),
    login: build.query<TResponse<TTokenData>, TAuthData>({
      query: (body) => ({
        url: "/Account/Login",
        method: "POST",
        body,
      }),
    }),
    register: build.query<TResponse<TTokenData>, TAuthData>({
      query: (body) => ({
        url: "/Account/Register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLazyRegisterQuery, useLazyLoginQuery } = accountApi;
