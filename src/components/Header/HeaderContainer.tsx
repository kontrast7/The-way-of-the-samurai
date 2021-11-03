import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../Redux/authReducer";
import { AppStateType } from "../../Redux/ReduxStore";
import { authMe } from "../Api/Api";

type HeaderContainerPropsType = {
  isAuth: boolean;
  login: string | null;
  setAuthUserData: (id: number, email: string, login: string) => void;
};

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    authMe().then((response) => {
      if (response.resultCode === 0) {
        let { id, email, login } = response.data;

        this.props.setAuthUserData(id, email, login);
      }
    });
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
