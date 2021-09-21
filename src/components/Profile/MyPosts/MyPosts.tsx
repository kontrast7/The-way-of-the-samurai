import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { ProfilePageType } from "../../../Redux/State";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
  ProfileReducerActionsType,
} from "../../../Redux/profileReducer";

type PropsType = {
  profilePage: ProfilePageType;
  dispatch: (action: ProfileReducerActionsType) => void;
};

export const MyPosts = (props: PropsType) => {
  let postsRender = props.profilePage.posts.map((m) => (
    <Post key={m.id} text={m.text} likes={m.likes} />
  ));

  const addPost = () => {
    if (props.profilePage.messageForNewPost.trim() !== "") {
      props.dispatch(addPostActionCreator());
    }
  };

  const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    props.dispatch(onPostChangeActionCreator(text));
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addPost();
    }
  };

  return (
    <div className={s.wrapper}>
      <h2>Main posts</h2>
      <div>
        <div>
          <input
            placeholder={"Enter your post..."}
            className={s.textarea}
            value={props.profilePage.messageForNewPost}
            onChange={onPostChange}
            onKeyPress={onKeyPressHandler}
          />
        </div>
        <div className={s.buttons}>
          <button
            className={s.add_post}
            onClick={() => {
              addPost();
            }}
          >
            Add post
          </button>
          <button className={s.remove_post}>Remove</button>
        </div>
      </div>
      <div className={s.posts}>{postsRender}</div>
    </div>
  );
};
