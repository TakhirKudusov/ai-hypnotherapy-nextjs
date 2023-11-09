import { FC, memo } from "react";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import BotMessage from "@/components/chat/botMessage";
import { MESSAGE_EMITTER } from "@/components/chat/utils/enums/messageEmitter.enum";

type Props = {
  messages: TChatMessage[];
};

const ChatMessagesList: FC<Props> = ({ messages }) => {
  return (
    <>
      {messages.map((el) => {
        return (
          <BotMessage
            key={el.utcDateCreation + el.actor}
            emitter={
              el.actor === 0 ? MESSAGE_EMITTER.USER : MESSAGE_EMITTER.BOT
            }
            text={el.text}
            isLoading={el.isLoading}
          />
        );
      })}
    </>
  );
};

export default memo(ChatMessagesList);
