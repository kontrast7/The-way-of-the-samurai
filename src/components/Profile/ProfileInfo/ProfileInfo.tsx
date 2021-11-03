import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";
import yes from "../../../assets/profileInfo/yes.png";
import no from "../../../assets/profileInfo/no.png";
import { ProfileResponseType } from "../../Api/Api";

export type PropsType = {
  profile: ProfileResponseType | null;
};

export const ProfileInfo = (props: PropsType) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={s.avatar_block}>
        <img
          className={s.avatar}
          src={
            props.profile.photos.large ||
            "https://www.ejin.ru/wp-content/uploads/2018/10/crew4_1024.png"
          }
          alt={"avatar"}
        />
      </div>

      <div className={s.description}>
        <h2 className={s.name}>{props.profile.fullName}</h2>
        <h4 className={s.aboutMe}>{props.profile.aboutMe}</h4>

        <div>
          {props.profile.contacts.vk ? (
            <a className={s.link} href={`https://${props.profile.contacts.vk}`}>
              vk
            </a>
          ) : (
            ""
          )}
        </div>
        <div>
          {props.profile.contacts.github ? (
            <a
              className={s.link}
              href={`https://${props.profile.contacts.github}`}
            >
              github
            </a>
          ) : (
            ""
          )}
        </div>
        <div className={s.jobsDiv}>
          job search:
          {props.profile.lookingForAJob ? (
            <img
              style={{ width: "20px", marginLeft: "5px" }}
              src={yes}
              alt={"yes"}
            />
          ) : (
            <img style={{ width: "20px" }} src={no} alt={"no"} />
          )}
        </div>
      </div>
    </>
  );
};
