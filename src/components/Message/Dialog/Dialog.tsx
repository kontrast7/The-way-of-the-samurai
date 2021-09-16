import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Message.module.css";
import { DialogType } from "../../Redux/State";

type PropsType = {
  dialog: DialogType;
};

export const DialogItem = (props: PropsType) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/message/${props.dialog.id}`} activeClassName={s.active}>
          <div className={s.flex_name}>
              <img className={s.user_avatar} src={props.dialog.avatarUrl}>
              </img>
              {props.dialog.name}
          </div>

      </NavLink>
    </div>
  );
};
