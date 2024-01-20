import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";
import { TTokenData } from "@/redux/APIs/utils/types/response/TTokenData";
import { ROUTES } from "@/routes/routes.enum";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
    if (accessToken && accessToken !== "undefined")
      headers.set("Authorization", `Bearer ${accessToken}`);
    return headers;
  },
});

const staggeredBaseQueryWithFailOut = retry(
  async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (
      result?.error?.status === 401 &&
      location.pathname !== ROUTES.HOME_AUTH
    ) {
      const refreshResult = await baseQuery(
        {
          url: "/Account/Refresh",
          method: "POST",
          body: {
            accessToken: localStorage.getItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN),
            refreshToken: localStorage.getItem(
              LOCAL_STORAGE_ITEM.REFRESH_TOKEN,
            ),
          },
        },
        api,
        extraOptions,
      );

      const refreshData = (refreshResult.data as any).data as
        | TTokenData
        | undefined;

      if (
        refreshData &&
        refreshData[LOCAL_STORAGE_ITEM.ACCESS_TOKEN] &&
        refreshData[LOCAL_STORAGE_ITEM.REFRESH_TOKEN]
      ) {
        localStorage.setItem(
          LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
          refreshData[LOCAL_STORAGE_ITEM.ACCESS_TOKEN],
        );
        localStorage.setItem(
          LOCAL_STORAGE_ITEM.REFRESH_TOKEN,
          refreshData[LOCAL_STORAGE_ITEM.REFRESH_TOKEN],
        );

        result = await baseQuery(args, api, extraOptions);
      } else {
        localStorage.removeItem(LOCAL_STORAGE_ITEM.ACCESS_TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_ITEM.REFRESH_TOKEN);
        location.replace("/");
      }
    }

    return result;
  },
  { maxRetries: 0 },
);

export const backendApi = createApi({
  refetchOnReconnect: true,
  refetchOnFocus: true,
  refetchOnMountOrArgChange: true,
  reducerPath: "backendApi",
  baseQuery: staggeredBaseQueryWithFailOut,
  tagTypes: ["CHAT"],
  endpoints: () => ({}),
});
