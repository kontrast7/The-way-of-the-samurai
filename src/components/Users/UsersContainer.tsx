import { connect } from "react-redux";
import { AppStateType } from "../../Redux/ReduxStore";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUser,
  toggleIsFetching,
  unFollow,
  userType,
} from "../../Redux/usersReducer";
import React from "react";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/Preloader/Preloader";

type UsersPropsType = {
  users: Array<userType>;
  follow: (userID: number) => void;
  unFollow: (userID: number) => void;
  setUser: (users: Array<userType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  isFetching: boolean;
};
export type UsersResponseType = {
  error: string | null;
  items: userType[];
  totalCount: number;
};

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get<UsersResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUser(response.data.items);
        this.props.setTotalUsersCount(30 || response.data.totalCount);
      });
  }
  onPageChange = (pageNumber: number) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get<UsersResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUser(response.data.items);
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
          unFollow={(id) => this.props.unFollow(id)}
          follow={(id) => this.props.follow(id)}
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
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUser,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching})(UsersContainer);
