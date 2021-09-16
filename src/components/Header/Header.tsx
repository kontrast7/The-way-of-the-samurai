import React from "react";
import classes from "./Header.module.css";

export const Header = () => {
  return (
      <header className={classes.header}>
        <div className={classes.header_flex}>
          <img
            src={"https://image.flaticon.com/icons/png/512/72/72102.png"}
            alt={"logo"}
          />
        </div>
      </header>
  );
};
