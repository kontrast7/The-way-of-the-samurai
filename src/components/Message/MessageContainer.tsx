import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../Redux/dialogsReducer";
import { Message } from "./Message";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import { compose, Dispatch } from "redux";
import { AuthRedirectComponent } from "../../hoc/AuthRedirect";
import React from 'react';

type MapDispatchToPropsPropsType = {
  addMessage: () => void;
  onMessageChange: (text: string) => void;
};

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogPage: state.dialogPage,
    newMessageText: state.dialogPage.newMessageText,
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

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirectComponent
)(Message);
