import React, { ChangeEvent, KeyboardEvent } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/Store";

type PropsType = {
  posts: Array<PostsType>;
  updateNewPostText:(text:string)=>void;
  addPost:()=>void;
  newPostText: string;
};


export const MyPosts = (props: PropsType) => {
  let postsRender = props.posts.map(m => (
    <Post key={m.id} text={m.text} likes={m.likes} />
  ));

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value;
    props.updateNewPostText(text)
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddPost();
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
            value={props.newPostText}
            onChange={onPostChange}
            onKeyPress={onKeyPressHandler}
          />
        </div>
        <div className={s.buttons}>
          <button
            className={s.add_post}
            onClick={() => {
              onAddPost();
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
