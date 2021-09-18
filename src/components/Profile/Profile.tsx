import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostsType } from "../Redux/State";

type PropsTypes = {
  posts: Array<PostsType>;
  messageForNewPost: string;
  dispatch: (action: any) => void;
};

export const Profile = (props: PropsTypes) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        dispatch={props.dispatch}
        messageForNewPost={props.messageForNewPost}
      />
    </div>
  );
};
