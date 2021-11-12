import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import { getProfileInfoThunk } from "../../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import { ProfileResponseType } from "../Api/Api";

export type CommonPropsType = {
  profile: ProfileResponseType | null;
  getProfileInfoThunk: (usetId: string) => void;
  isAuth: boolean;
};
type PathParamsType = {
  userId: string;
};

type ProfilePropsType = RouteComponentProps<PathParamsType> & CommonPropsType;

class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = "2";
    }
    this.props.getProfileInfoThunk(userId);
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"}/>
    }
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}
type mapStateToPropsType = {
  profile: ProfileResponseType | null;
  isAuth: boolean
};
let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getProfileInfoThunk })(
  WithUrlDataContainerComponent
);
