import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import { setUserProfile } from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

export type PhotoType = {
  small: string | null;
  large: string | null;
};
export type ContactsType = {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
};
export type ProfileResponseType = {
  aboutMe: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: PhotoType;
  contacts: ContactsType;
};
export type CommonPropsType = {
  setUserProfile: (profile: ProfileResponseType) => void;
  profile: ProfileResponseType | null;
};


type PathParamsType = {
  userId: string;
}
type ProfilePropsType = RouteComponentProps<PathParamsType> & CommonPropsType


class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = "2"
    }
    axios
      .get<ProfileResponseType>(
        `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
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
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
