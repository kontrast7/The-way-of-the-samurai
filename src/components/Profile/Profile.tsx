import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { addPost, PostsType } from "../Redux/State";

type PropsTypes = {
  posts: Array<PostsType>;
  addPost: () => void;
  messageForNewPost: string;
  updateNewPostText: (newText: string) => void;
};

export const Profile = (props: PropsTypes) => {
  return (
    <div className={classes.wrapper}>
      <ProfileInfo />
      <MyPosts
        posts={props.posts}
        addPost={addPost}
        messageForNewPost={props.messageForNewPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};
