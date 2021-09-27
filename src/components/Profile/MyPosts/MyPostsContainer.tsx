import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../Redux/profileReducer";
import { MyPosts } from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {
  /*store: Store;*/
};

export const MyPostsContainer = (props: PropsType) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChange = (text: string) => {
          store.dispatch(onPostChangeActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.messageForNewPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
