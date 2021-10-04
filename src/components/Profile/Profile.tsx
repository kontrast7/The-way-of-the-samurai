import React from "react";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsTypes = {
};

export const Profile = (props: PropsTypes) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo />

      <MyPostsContainer />
    </div>
  );
};
