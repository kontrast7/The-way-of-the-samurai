import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import { setUserProfile } from "../../Redux/profileReducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { getProfileInfo, ProfileResponseType } from "../Api/Api";



export type CommonPropsType = {
  setUserProfile: (profile: ProfileResponseType) => void;
  profile: ProfileResponseType | null;
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
    getProfileInfo(userId).then((data) => {
      this.props.setUserProfile(data);
    });
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  WithUrlDataContainerComponent
);
