import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../Redux/dialogsReducer";
import { Message } from "./Message";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import { Dispatch } from "redux";

type MapDispatchToPropsPropsType = {
  addMessage: () => void;
  onMessageChange: (text: string) => void;
};

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogPage: state.dialogPage,
    newMessageText: state.dialogPage.newMessageText,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsPropsType => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text: string) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;
