import {DialogPageType, MessageType} from "./State";
import { v1 } from "uuid";


const dialogsReducer = (state: DialogPageType, action: DialogsReducerActionsType) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      let newMessage: MessageType = {
        id: v1(),
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case "UPDATE_NEW_MESSAGE_TEXT":
      state.newMessageText = action.newTMessageText;
      return state;
    default:
      return state;
  }
};

export type DialogsReducerActionsType =
  | AddMessageActionCreatorType
  | OnMessageChangeActionCreatorType;

export type AddMessageActionCreatorType = {
  type: "ADD_MESSAGE";
};
export type OnMessageChangeActionCreatorType = {
  type: "UPDATE_NEW_MESSAGE_TEXT";
  newTMessageText: string;
};

export const addMessageActionCreator = (): AddMessageActionCreatorType => ({
  type: "ADD_MESSAGE",
});
export const onMessageChangeActionCreator = (
  text: string
): OnMessageChangeActionCreatorType => {
  return {
    type: "UPDATE_NEW_MESSAGE_TEXT",
    newTMessageText: text,
  };
};

export default dialogsReducer;
