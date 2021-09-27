import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../Redux/dialogsReducer";
import { Message } from "./Message";
import StoreContext from "../../StoreContext";

type PropsType = {
  /*store: Store;*/
};

export const MessageContainer = (props: PropsType) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onMessageChange = (text: string) => {
          store.dispatch(onMessageChangeActionCreator(text));
        };
        return (
          <Message
            dialogPage={store.getState().dialogPage}
            newMessageText={store.getState().dialogPage.newMessageText}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
