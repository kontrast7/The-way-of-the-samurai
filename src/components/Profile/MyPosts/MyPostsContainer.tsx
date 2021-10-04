import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import { AppStateType } from "../../../Redux/ReduxStore";
import { Dispatch } from "redux";


type MapDispatchToPropsPropsType = {
  addPost: () => void;
  updateNewPostText: (text: string) => void;
};

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.messageForNewPost,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsPropsType => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(onPostChangeActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
