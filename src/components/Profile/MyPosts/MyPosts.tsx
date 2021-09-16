import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostsType } from "../../Redux/State";

type PropsType = {
  posts: Array<PostsType>;
  addPost: () => void;
  messageForNewPost: string;
  updateNewPostText: (newText: string) => void;
};

export const MyPosts = (props: PropsType) => {
  let postsRender = props.posts.map((m) => (
    <Post key={m.id} text={m.text} likes={m.likes} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }
  };

  return (
    <div className={s.wrapper}>
      <h2>Main posts</h2>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            className={s.textarea}
            value={props.messageForNewPost}
            onChange={onPostChange}
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
