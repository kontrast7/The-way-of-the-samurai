import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from "../../Redux/State";

type PropsTypes = {
  profilePage: ProfilePageType;
  dispatch: (action: any) => void;
};

export const Profile = (props: PropsTypes) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />
    </div>
  );
};
