import { backendApi } from "@/redux/APIs/backendApi";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import { TTextData } from "@/redux/APIs/utils/types/request/TTextData";

export const chatApi = backendApi.injectEndpoints({
  endpoints: (build) => ({
    getChat: build.query<TChatMessage[], null>({
      query: () => "/Chat/GetChat",
      providesTags: ["CHAT"],
      transformResponse: (data: TChatMessage[]) => {
        return data.sort((a, b) =>
          a.utcDateCreation.localeCompare(b.utcDateCreation),
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
    makeInterferenceFromText: build.mutation({
      query: (body: TTextData) => ({
        url: "/Chat/MakeInterferenceFromText",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CHAT"],
    }),
    makeInterferenceFromAudio: build.mutation({
      query: (body: any) => ({
        url: "/Chat/MakeInterferenceFromAudio",
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
  useMakeInterferenceFromAudioMutation,
  useMakeInterferenceFromTextMutation,
} = chatApi;
