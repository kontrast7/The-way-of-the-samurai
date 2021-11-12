import axios from "axios";
import { userType } from "../../Redux/usersReducer";

export type UsersResponseType = {
  error: string | null;
  items: userType[];
  totalCount: number;
};
export type followUnFollowPostType = {
  resultCode: number;
  // messages: Array<string>,
  // data: {}
};
export type ProfileResponseType = {
  aboutMe: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: PhotoType;
  contacts: ContactsType;
};
export type PhotoType = {
  small: string | null;
  large: string | null;
};
export type ContactsType = {
  facebook: string | null;
  website: string | null;
  vk: string | null;
  twitter: string | null;
  instagram: string | null;
  youtube: string | null;
  github: string | null;
  mainLink: string | null;
};
export type DataResponseType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  resultCode: number;
  messages: [];
  fieldsErrors: [];
};

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ac2e9e4b-fbeb-410b-8ade-89b124fefc6f",
  },
});

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
  return instance
    .get<UsersResponseType>(
      `users?page=
        ${currentPage}&count=${pageSize}`,
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      return response.data;
    });
};

export const getProfileInfo = (userId: string) => {
  return instance
    .get<ProfileResponseType>(`profile/${userId}`)
    .then((response) => {
      return response.data;
    });
};

export const unFollowAxios = (id: number) => {
  return instance
    .delete<followUnFollowPostType>(`follow/${id}`)
    .then((response) => {
      return response.data;
    });
};

export const followAxios = (id: number) => {
  return instance
    .post<followUnFollowPostType>(`follow/${id}`, { resultCode: 1 })
      .then((response) => {
        return response.data;
      });
};

export const authMe = () => {
  return instance.get<DataResponseType>(`auth/me`).then((response) => {
    return response.data;
  });
};
