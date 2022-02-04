import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import {
  follow,
  followThunkCreator,
  getUsersThunkCreator,
  setCurrentPage,
  toggleIsFollowing,
  unFollow,
  unFollowThunkCreator,
  userType,
} from "../../Redux/usersReducer";
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { compose } from "redux";
import { AuthRedirectComponent } from "../../hoc/AuthRedirect";

type UsersPropsType = {
  users: Array<userType>;
  follow: (userID: number) => void;
  unFollow: (userID: number) => void;
  setCurrentPage: (currentPage: number) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
  toggleIsFollowing: (isFetching: boolean, userId: number) => void;
  followingInProgress: Array<number>;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  unFollowThunkCreator: (id: number) => void;
  followThunkCreator: (id: number) => void;
};

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChange = (pageNumber: number) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChange={this.onPageChange}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          toggleIsFollowing={this.props.toggleIsFollowing}
          followingInProgress={this.props.followingInProgress}
          unFollowThunkCreator={this.props.unFollowThunkCreator}
          followThunkCreator={this.props.followThunkCreator}
        />
      </>
    );
  }
}

type mapStateToPropsType = {
  users: Array<userType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose<React.ComponentType>(
  AuthRedirectComponent,
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowing,
    getUsersThunkCreator,
    unFollowThunkCreator,
    followThunkCreator,
  })
)(UsersContainer);