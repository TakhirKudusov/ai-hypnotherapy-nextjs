import { FC, memo } from "react";
import { TChatMessage } from "@/redux/APIs/utils/types/response/TChatMessage";
import BotMessage from ".//MessageItem";
import { MESSAGE_EMITTER } from "@/components/main/utils/enums/messageEmitter.enum";

type Props = {
  messages: TChatMessage[];
};

const MessagesList: FC<Props> = ({ messages }) => {
  return (
    <>
      {messages.map((el) => {
        return (
          <BotMessage
            key={el.key}
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

export default memo(MessagesList);
