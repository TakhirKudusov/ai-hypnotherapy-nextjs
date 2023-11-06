import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { LOCAL_STORAGE_ITEM } from "@/utils/enums/localStorageItem.enum";

const staggeredBaseQueryWithFailOut = retry(
  async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: "/api",
      credentials: "same-origin",
      prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem(
          LOCAL_STORAGE_ITEM.ACCESS_TOKEN,
        );
        if (accessToken) headers.set("Authorization", `Bearer ${accessToken}`);
        return headers;
      },
    })(args, api, extraOptions);

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
