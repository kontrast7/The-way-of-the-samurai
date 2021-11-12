import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { authMeThunk } from "../../Redux/authReducer";
import { AppStateType } from "../../Redux/ReduxStore";

type HeaderContainerPropsType = {
  isAuth: boolean;
  login: string | null;
  authMeThunk: () => void;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.authMeThunk();
  }

  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}
const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToProps, { authMeThunk })(HeaderContainer);
