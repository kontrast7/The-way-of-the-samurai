import React from "react";
import s from "../Message.module.css";
import { MessageType } from "../../Redux/State";

type PropsType = {
  messages: MessageType;
};

export const MessageItem = (props: PropsType) => {
  return <div className={s.message1}>{props.messages.message}</div>;
};
