import { Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../Redux/ReduxStore";

type mapStateToPropsForRedirectType = {
  isAuth: boolean;
};

let mapStateToPropsForRedirect = (
  state: AppStateType
): mapStateToPropsForRedirectType => ({
  isAuth: state.auth.isAuth,
});

export const AuthRedirectComponent = (Component: any) => {
  class RedirectComponent extends React.Component<any> {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
