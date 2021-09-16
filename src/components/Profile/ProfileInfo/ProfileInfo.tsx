import React from "react";
import classes from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <>
      <div className={classes.avatar_block}>
        <img
          className={classes.avatar}
          src={
            "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
          }
          alt={"avatar"}
        />
      </div>

      <div className={classes.description}>
        <div>INFO</div>
      </div>
    </>
  );
};
