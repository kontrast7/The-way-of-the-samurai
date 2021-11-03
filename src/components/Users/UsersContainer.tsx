import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUser,
  toggleIsFetching,
  toggleIsFollowing,
  unFollow,
  userType,
} from "../../Redux/usersReducer";
import React from "react";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";
import { getUsers } from "../Api/Api";

type UsersPropsType = {
  users: Array<userType>;
  follow: (userID: number) => void;
  unFollow: (userID: number) => void;
  setUser: (users: Array<userType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  toggleIsFetching: (isFetching: boolean) => void;
  isFetching: boolean;
  toggleIsFollowing: (isFetching: boolean, userId: number) => void;
  followingInProgress: Array<number>;
};

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUser(data.items);
      this.props.setTotalUsersCount(30 || data.totalCount);
    });
  }
  onPageChange = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUser(data.items);
    });
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUser,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowing,
})(UsersContainer);
