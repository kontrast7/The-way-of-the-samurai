import {DialogPageType, MessageType} from "./Store";
import { v1 } from "uuid";


let initialState = {
  newMessageText: "",
  dialogs: [
    {
      id: v1(),
      name: "Max",
      avatarUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
    },
    {
      id: v1(),
      name: "Alex",
      avatarUrl: "https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg",
    },
    {
      id: v1(),
      name: "Petya",
      avatarUrl:
          "https://i.pinimg.com/736x/01/6b/86/016b86df2200d0b3a456d0a32d4cd6ee.jpg",
    },
    {
      id: v1(),
      name: "Olya",
      avatarUrl:
          "https://vjoy.cc/wp-content/uploads/2020/12/1133ea1de4e69bd760056f2c04e90920.png",
    },
    {
      id: v1(),
      name: "Katya",
      avatarUrl:
          "https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg",
    },
  ],
  messages: [
    {
      id: v1(),
      message: "hi",
    },
    {
      id: v1(),
      message: "my",
    },
    {
      id: v1(),
      message: "name",
    },
    {
      id: v1(),
      message: "is",
    },
    {
      id: v1(),
      message: "Katya",
    },
  ],
}

const dialogsReducer = (state: DialogPageType = initialState, action: DialogsReducerActionsType) => {
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
