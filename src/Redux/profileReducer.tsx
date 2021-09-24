import { PostsType, ProfilePageType } from "./Store";
import { v1 } from "uuid";

let initialState = {
  messageForNewPost: "",
  posts: [
    {
      id: v1(),
      text: "VSIO",
      likes: 10,
    },
    {
      id: v1(),
      text: "ZBS",
      likes: 20,
    },
    {
      id: v1(),
      text: "OK",
      likes: 2,
    },
  ],
}

const profileReducer = (
  state: ProfilePageType = initialState,
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
