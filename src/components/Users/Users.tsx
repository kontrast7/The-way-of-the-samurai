import React from "react";
import s from "./users.module.css";
import avatar from "../../assets/noAvatar.jpg";
import { userType } from "../../Redux/usersReducer";
import { NavLink } from "react-router-dom";
import { v1 } from "uuid";

type propsType = {
  onPageChange: (pageNumber: number) => void;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: Array<userType>;
  unFollow: (id: number) => void;
  follow: (id: number) => void;
  toggleIsFollowing: (isFetching: boolean, userId: number) => void;
  followingInProgress: Array<number>;
  unFollowThunkCreator: (id: number) => void;
  followThunkCreator: (id: number) => void;
};

export let Users = (props: propsType) => {
  let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div key={v1()} className={s.wrapper}>
      <div className={s.pageNumbers}>
        {pages.map((p) => {
          return (
            <span
              key={v1()}
              onClick={() => props.onPageChange(p)}
              className={
                props.currentPage === p ? s.selectedPage : s.notSelectedPage
              }
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((m) => {
        return (
          <div key={m.id} className={s.wrapperItems}>
            <div className={s.userImgAndBtnWrapper}>
              <div>
                <NavLink to={`/profile/${m.id}`}>
                  <img
                    className={s.avatar}
                    src={m.photos.small !== null ? m.photos.small : avatar}
                    alt={m.name}
                  />
                </NavLink>
              </div>

              {m.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === m.id)}
                  className={s.btnUnf}
                  onClick={() => {
                    // props.toggleIsFollowing(true, m.id);
                    // return unFollowAxios(m.id).then((response) => {
                    //   if (response.resultCode === 0) {
                    //     props.unFollow(m.id);
                    //   }
                    //   props.toggleIsFollowing(false, m.id);
                    // });
                    props.unFollowThunkCreator(m.id);
                  }}
                >
                  Un follow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === m.id)}
                  className={s.btnFoll}
                  onClick={() => {
                    // props.toggleIsFollowing(true, m.id);
                    // return followAxios(m.id).then((response) => {
                    //   if (response.resultCode === 0) {
                    //     props.follow(m.id);
                    //   }
                    //   props.toggleIsFollowing(false, m.id);
                    // });
                    props.followThunkCreator(m.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>

            <div className={s.userInfo}>
              <div className={s.name}>{m.name}</div>
              <div>{m.status}</div>

              <div className={s.location}>{"m.location.country"}</div>
              <div className={s.location}>{"m.location.city"}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
