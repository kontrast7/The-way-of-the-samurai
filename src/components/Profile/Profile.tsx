import React from "react";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from './ProfileContainer';

type PropsTypes = {
    profile: ProfileResponseType | null
};

export const Profile = (props: PropsTypes) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};
