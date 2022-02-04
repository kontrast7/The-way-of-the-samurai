import React, { useState } from "react";
import s from "./ProfileInfo.module.css";

export type PropsType = {
  status: string;
};

export const ProfileStatus = (props: PropsType) => {
  const [state, setState] = useState(false);

  const activateMod = () => {
    setState(true);
  };
  const deactivateMod = () => {
    setState(false);
  };

  return (
    <div>
      {!state && (
        <div>
          <span onDoubleClick={activateMod}>{props.status}</span>
        </div>
      )}
      {state && (
        <div>
          <input onBlur={deactivateMod} autoFocus value={props.status} />
        </div>
      )}
    </div>
  );
};
