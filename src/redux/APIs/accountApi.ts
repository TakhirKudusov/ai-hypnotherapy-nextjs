import { backendApi } from "@/redux/APIs/backendApi";
import { TAuthData } from "@/redux/APIs/utils/types/request/TAuthData";
import { TTokenData } from "@/redux/APIs/utils/types/response/TTokenData";

export const accountApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    refreshToken: build.query<TAuthData, TAuthData>({
      query: (body) => ({
        url: "/Account/Refresh",
        method: "POST",
        body,
      }),
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
