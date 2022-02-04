import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import { getProfileInfoThunk } from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ProfileResponseType } from "../Api/Api";
import { AuthRedirectComponent } from "../../hoc/AuthRedirect";
import { compose } from "redux";

export type CommonPropsType = {
  profile: ProfileResponseType | null;
  getProfileInfoThunk: (userId: string) => void;
  isAuth: boolean;
};
type PathParamsType = {
  userId: string;
};

export type ProfilePropsType = RouteComponentProps<PathParamsType> &
  CommonPropsType;

class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getProfileInfoThunk(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

type mapStateToPropsType = {
  profile: ProfileResponseType | null;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getProfileInfoThunk }),
  withRouter,
  AuthRedirectComponent
)(ProfileContainer);
