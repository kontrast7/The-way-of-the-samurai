import React, { ChangeEvent, KeyboardEvent } from "react";
import { DialogItem } from "./Dialog/Dialog";
import s from "./Message.module.css";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogPageType } from "../../Redux/Store";
import { Redirect } from "react-router-dom";

type PropsType = {
  dialogPage: DialogPageType;
  addMessage: () => void;
  onMessageChange: (text: string) => void;
  newMessageText: string;
  isAuth: boolean;
};

export const Message = (props: PropsType) => {
  let dialogRender = props.dialogPage.dialogs.map((m) => {
    return <DialogItem key={m.id} dialog={m} />;
  });

  let messageRender = props.dialogPage.messages.map((m) => (
    <MessageItem key={m.id} messages={m} />
  ));

  const onAddMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    props.onMessageChange(text);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" && onAddMessage();

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }

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
