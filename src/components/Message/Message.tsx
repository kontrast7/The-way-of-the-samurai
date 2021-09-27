import React, { ChangeEvent, KeyboardEvent } from "react";
import { DialogItem } from "./Dialog/Dialog";
import s from "./Message.module.css";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogPageType } from "../../Redux/Store";

type PropsType = {
  dialogPage: DialogPageType;
  addMessage: () => void;
  onMessageChange: (text: string) => void;
  newMessageText: string;
};

export const Message = (props: PropsType) => {
  let dialogRender = props.dialogPage.dialogs.map((m) => {
    return <DialogItem dialog={m} />;
  });

  let messageRender = props.dialogPage.messages.map((m) => {
    return <MessageItem messages={m} />;
  });

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    props.onMessageChange(text);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddMessage();
    }
  };

  return (
    <div className={s.message}>
      <div className={s.dialog_items}>{dialogRender}</div>
      <div className={s.message_items}>{messageRender}</div>
      <div />
      <div className={s.input_wrapper}>
        <input
          placeholder={"Enter your message..."}
          value={props.newMessageText}
          onChange={onMessageChange}
          onKeyPress={onKeyPress}
          className={s.input}
        />
        <button
          className={s.add_message}
          onClick={() => {
            onAddMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
