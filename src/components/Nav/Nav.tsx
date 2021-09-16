import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.activeLink}`}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://image.flaticon.com/icons/png/512/149/149452.png"
          />
          Profile
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/message" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://image.flaticon.com/icons/png/512/134/134800.png"
          />
          Message
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://image.flaticon.com/icons/png/512/149/149229.png"
          />
          News
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://image.flaticon.com/icons/png/512/149/149103.png"
          />
          Music
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://image.flaticon.com/icons/png/512/149/149293.png"
          />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
