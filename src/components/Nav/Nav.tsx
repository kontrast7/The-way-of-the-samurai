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
            src="https://img-premium.flaticon.com/png/512/880/premium/880539.png?token=exp=1633358908~hmac=5d510e9a7cf0f6190bfeaed643e46767"
            alt={"nav_icon"}
          />
          Profile
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/message" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://img-premium.flaticon.com/png/512/880/premium/880522.png?token=exp=1633358908~hmac=61ce5650db347b92492ad4d818fb0d3c"
            alt={"nav_icon"}
          />
          Message
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://img-premium.flaticon.com/png/512/880/premium/880543.png?token=exp=1633358881~hmac=ffa02429cbb41e9c1b0d6f4fc53ed4af"
            alt={"nav_icon"}
          />
          Users
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://img-premium.flaticon.com/png/512/880/premium/880536.png?token=exp=1633358908~hmac=68b159aa41216310e9a405cb2c5eeb14"
            alt={"nav_icon"}
          />
          News
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://img-premium.flaticon.com/png/512/880/premium/880566.png?token=exp=1633358908~hmac=a9677f988f95e5b2d2f5207e3cbc7da6"
            alt={"nav_icon"}
          />
          Music
        </NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>
          <img
            className={classes.icons}
            src="https://img-premium.flaticon.com/png/512/880/premium/880541.png?token=exp=1633358908~hmac=05ec18419074e5ba79a7be5d2ab1de4b"
            alt={"nav_icon"}
          />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
