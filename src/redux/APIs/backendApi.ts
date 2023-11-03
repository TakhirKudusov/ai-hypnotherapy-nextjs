import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const staggeredBaseQueryWithFailOut = retry(
  async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: "/api",
      credentials: "same-origin",
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
  tagTypes: [],
  endpoints: () => ({}),
});
