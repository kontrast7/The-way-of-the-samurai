import { PostsType, ProfilePageType } from "./State";
import { v1 } from "uuid";


const profileReducer = (
  state: ProfilePageType,
  action: ProfileReducerActionsType
) => {
  debugger;
  switch (action.type) {
    case "UPDATE_NEW_POST_TEXT":
      state.messageForNewPost = action.newPostText;
      return state;

    case "ADD_POST":
      let newPost: PostsType = {
        id: v1(),
        text: state.messageForNewPost,
        likes: 0,
      };
      state.posts.unshift(newPost);
      state.messageForNewPost = "";
      return state;

    default:
      return state;
  }
};

export type ProfileReducerActionsType =
  | AddPostActionCreatorType
  | OnPostChangeActionCreatorType;

export type AddPostActionCreatorType = {
  type: "ADD_POST";
};
export type OnPostChangeActionCreatorType = {
  type: "UPDATE_NEW_POST_TEXT";
  newPostText: string;
};

export const addPostActionCreator = (): AddPostActionCreatorType => ({
  type: "ADD_POST",
});

export const onPostChangeActionCreator = (text: string): OnPostChangeActionCreatorType => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: text,
  };
};

export default profileReducer;
