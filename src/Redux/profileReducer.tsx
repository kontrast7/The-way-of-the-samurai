import { ProfileResponseType } from "../components/Api/Api";

export type PostsType = {
  id?: number;
  text: string;
  likes: number;
};
export type ProfilePageType = {
  messageForNewPost: string;
  posts: Array<PostsType>;
  profile: ProfileResponseType | null;
};

let initialState = {
  messageForNewPost: "",
  posts: [
    {
      id: 1,
      text: "VSIO",
      likes: 10,
    },
    {
      id: 2,
      text: "ZBS",
      likes: 20,
    },
    {
      id: 3,
      text: "OK",
      likes: 2,
    },
  ],
  profile: null,
};

const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileReducerActionsType
) => {
  let stateCopy = { ...state };
  switch (action.type) {
    case "ADD_POST":
      let newPost: PostsType = {
        id: 4,
        text: state.messageForNewPost,
        likes: 0,
      };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.unshift(newPost);
      stateCopy.messageForNewPost = "";
      return stateCopy;
    case "UPDATE_NEW_POST_TEXT":
      return { ...state, messageForNewPost: action.newPostText };
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export type ProfileReducerActionsType =
  | AddPostActionCreatorType
  | OnPostChangeActionCreatorType
  | setUserProfileType;

export type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>;
export type OnPostChangeActionCreatorType = ReturnType<
  typeof onPostChangeActionCreator
>;
export type setUserProfileType = ReturnType<typeof setUserProfile>;

export const addPostActionCreator = () => ({ type: "ADD_POST" } as const);
export const onPostChangeActionCreator = (text: string) => {
  return {
    type: "UPDATE_NEW_POST_TEXT",
    newPostText: text,
  } as const;
};
export const setUserProfile = (profile: ProfileResponseType) => {
  return {
    type: "SET_USER_PROFILE",
    profile,
  } as const;
};

export default profileReducer;
