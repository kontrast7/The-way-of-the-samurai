import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../Redux/dialogsReducer";
import { Message } from "./Message";
import { connect } from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";


type MapDispatchToPropsPropsType = {
  addMessage: ()=> void,
  onMessageChange: (text: string)=> void,
}

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogPage: state.dialogPage,
    newMessageText: state.dialogPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch: any): MapDispatchToPropsPropsType => {
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
