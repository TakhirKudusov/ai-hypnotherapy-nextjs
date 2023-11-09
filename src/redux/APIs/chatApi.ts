import { backendApi } from "@/redux/APIs/backendApi";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import { TTextData } from "@/redux/APIs/utils/types/request/TTextData";
import { TTextMessage } from "@/redux/APIs/utils/types/response/TTextMessage";

export const chatApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<TChatMessage[], null>({
      query: () => "/Chat/GetChat",
      providesTags: ["CHAT"],
      transformResponse: (data: TChatMessage[]) => {
        data.push({
          actor: 3,
          text: "Приветственное сообщение от бота",
          utcDateCreation: "1970-01-01T00:00:00.8158556Z",
        });

        return data.sort((a, b) =>
          b.utcDateCreation.localeCompare(a.utcDateCreation),
        );
      },
    }),
    startNewDialogue: build.mutation({
      query: () => ({
        url: "/Chat/StartNewDialogue",
        method: "POST",
      }),
      invalidatesTags: ["CHAT"],
    }),
    makeInferenceFromText: build.mutation<TTextMessage, TTextData>({
      query: (body) => ({
        url: "/Chat/MakeInferenceFromText",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CHAT"],
    }),
    makeInferenceFromAudio: build.mutation({
      query: (body: any) => ({
        url: "/Chat/MakeInferenceFromAudio",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CHAT"],
    }),
  }),
});

export const {
  useGetChatQuery,
  useStartNewDialogueMutation,
  useMakeInferenceFromAudioMutation,
  useMakeInferenceFromTextMutation,
} = chatApi;
