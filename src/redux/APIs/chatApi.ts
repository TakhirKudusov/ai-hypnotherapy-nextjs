import { backendApi } from "@/redux/APIs/backendApi";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import { TTextData } from "@/redux/APIs/utils/types/request/TTextData";
import { TTextMessage } from "@/redux/APIs/utils/types/response/TTextMessage";
import { v1 } from "uuid";
import { TResponse } from "@/redux/APIs/utils/types/response/TResponse";

export const chatApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<TResponse<TChatMessage[]>, null>({
      query: () => "/Chat/GetChat",
      providesTags: ["CHAT"],
      transformResponse: (data: TResponse<TChatMessage[]>) => {
        data.data.push({
          actor: 3,
          text: "Приветственное сообщение от бота",
          utcDateCreation: "1970-01-01T00:00:00.8158556Z",
          key: v1(),
        });

        data.data
          .map((el) => {
            el.key = v1();
            return el;
          })
          .sort((a, b) => b.utcDateCreation.localeCompare(a.utcDateCreation));

        return data;
      },
    }),
    startNewDialogue: build.mutation({
      query: () => ({
        url: "/Chat/StartNewDialogue",
        method: "POST",
      }),
      invalidatesTags: ["CHAT"],
    }),
    makeInferenceFromText: build.mutation<TResponse<TTextMessage>, TTextData>({
      query: (body) => ({
        url: "/Chat/MakeInferenceFromText",
        method: "POST",
        body,
      }),
    }),
    transcribe: build.mutation<TResponse<TTextMessage>, FormData>({
      query: (body) => ({
        url: "/Chat/Transcribe",
        method: "POST",
        body,
      }),
    }),
    downloadRecord: build.query({
      query: (uid: string) => `/Chat/DownloadRecord/${uid}`,
    }),
  }),
});

export const {
  useGetChatQuery,
  useStartNewDialogueMutation,
  useMakeInferenceFromTextMutation,
} = chatApi;
