import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

type PropsType = {
  isAuth: boolean;
  login: string | null
};

export const Header = (props: PropsType) => {
  return (
    <header className={s.header}>
      <div className={s.header_flex}>
        <img
          src={"https://image.flaticon.com/icons/png/512/72/72102.png"}
          alt={"logo"}
        />
      </div>
      <div className={s.login}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
