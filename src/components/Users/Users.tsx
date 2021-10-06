import React from "react";
import { userType } from "../../Redux/usersReducer";
import s from "./users.module.css";
import axios from "axios";
import avatar from "../../assets/noAvatar.jpg"

type UsersPropsType = {
  users: Array<userType>;
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUser: (users: Array<userType>) => void;
};
export type UsersResponseType = {
  error: string | null;
  items: userType[];
  totalCount: number;
};

const Users = (props: UsersPropsType) => {
  if (props.users.length < 1) {
    axios
      .get<UsersResponseType>(
        "https://social-network.samuraijs.com/api/1.0/users"
      )
      .then((response) => {
        props.setUser(response.data.items);
      });
  }
  return (
    <div className={s.wrapper}>
      {props.users.map((m) => {
        return (
          <div key={m.id} className={s.wrapperItems}>
            <div className={s.userImgAndBtnWrapper}>
              <div>
                <img
                  className={s.avatar}
                  src={
                    m.photos.small !== null
                      ? m.photos.small
                      : avatar
                  }
                  alt={m.name}
                />
              </div>

              {m.followed ? (
                <button
                  className={s.btnUnf}
                  onClick={() => props.unfollow(m.id)}
                >
                  Un follow
                </button>
              ) : (
                <button
                  className={s.btnFoll}
                  onClick={() => props.follow(m.id)}
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

export default Users;