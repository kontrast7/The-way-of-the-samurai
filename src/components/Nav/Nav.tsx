import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import user from '../../assets/nav/user.png'
import message from '../../assets/nav/chat.png'
import news from '../../assets/nav/document.png'
import users from '../../assets/nav/contact-book.png'
import music from '../../assets/nav/play.png'
import setting from '../../assets/nav/spanner.png'

export const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.activeLink}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src={user}
            alt={"nav_icon"}
          />
          Profile
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/message" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src={message}
            alt={"nav_icon"}
          />
          Message
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src={users}
            alt={"nav_icon"}
          />
          Users
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src={news}
            alt={"nav_icon"}
          />
          News
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src={music}
            alt={"nav_icon"}
          />
          Music
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src={setting}
            alt={"nav_icon"}
          />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
