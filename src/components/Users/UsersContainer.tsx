import { connect } from "react-redux";
import Users from "./Users";
import { Dispatch } from "redux";
import { AppStateType } from "../../Redux/ReduxStore";
import {followAC, setUserAC, unFollowAC, userType} from "../../Redux/usersReducer";

type mapStateToPropsType = {
  users: Array<userType>;
};
type mapDispatchToPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUser: (users: Array<userType>) => void;
};
export type alltypeUsers = mapStateToPropsType & mapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: number) => {
      dispatch(unFollowAC(userID));
    },
    setUser: (users: Array<userType>) => {
      dispatch(setUserAC(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
