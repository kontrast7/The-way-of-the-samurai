import React, { ChangeEvent, KeyboardEvent } from "react";
import { DialogItem } from "./Dialog/Dialog";
import s from "./Message.module.css";
import { MessageItem } from "./MessageItem/MessageItem";
import {DialogPageType} from "../../Redux/State";
import {addMessageActionCreator, DialogsReducerActionsType, onMessageChangeActionCreator} from "../../Redux/dialogsReducer";

type PropsType = {
  dialogPage: DialogPageType
  dispatch: (action: DialogsReducerActionsType) => void;
};

export const Message = (props: PropsType) => {

  let dialogRender = props.dialogPage.dialogs.map((m) => {
    return <DialogItem dialog={m} />;
  });

  let messageRender = props.dialogPage.messages.map((m) => {
    return <MessageItem messages={m} />;
  });

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value;
    props.dispatch(onMessageChangeActionCreator(text));
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
          placeholder={"Enter your message..."}
          value={props.dialogPage.newMessageText}
          onChange={onMessageChange}
          onKeyPress={onKeyPress}
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
