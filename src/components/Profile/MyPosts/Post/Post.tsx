import React from "react";
import classes from "./Post.module.css";
import { PostsType } from "../../../Redux/State";

/*type PropsType = {
  text: string;
  likes: number;
};*/

const Post = (props: PostsType) => {
  return (
    <div className={classes.item}>
      <img
        src={"https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"}
        alt="post-img"
      />
      {props.text}
      <div>
        <span>Like {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
