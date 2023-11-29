import { backendApi } from "@/redux/APIs/backendApi";
import { TAuthData } from "@/redux/APIs/utils/types/request/TAuthData";
import { TTokenData } from "@/redux/APIs/utils/types/response/TTokenData";
import { TResponse } from "@/redux/APIs/utils/types/response/TResponse";

export const accountApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
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
