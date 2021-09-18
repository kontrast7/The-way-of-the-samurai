import React, { KeyboardEvent } from "react";
import { DialogItem } from "./Dialog/Dialog";
import s from "./Message.module.css";
import { MessageItem } from "./MessageItem/MessageItem";
import {
  addMessageActionCreator,
  DialogType,
  MessageType,
  onMessageChangeActionCreator,
} from "../../Redux/State";

type PropsType = {
  dialogs: Array<DialogType>;
  messages: Array<MessageType>;
  dispatch: (action: any) => void;
  newMessageText: string;
};

export const Message = (props: PropsType) => {
  let dialogRender = props.dialogs.map((m) => {
    return <DialogItem dialog={m} />;
  });

  let messageRender = props.messages.map((m) => {
    return <MessageItem messages={m} />;
  });

  let newMessageElement = React.createRef<HTMLInputElement>();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    if (newMessageElement.current) {
      let text = newMessageElement.current.value;
      props.dispatch(onMessageChangeActionCreator(text));
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };

  return (
    <div className={s.message}>
      <div className={s.dialog_items}>{dialogRender}</div>
      <div className={s.message_items}>{messageRender}</div>
      <div></div>
      <div className={s.input_wrapper}>
        <input
          onKeyPress={onKeyPress}
          ref={newMessageElement}
          value={props.newMessageText}
          onChange={onMessageChange}
          className={s.input}
        />
        <button
          className={s.add_message}
          onClick={() => {
            addMessage();
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
