
export type photosType = {
  small: string | null;
  large: string | null;
};
export type userType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: photosType;
  status: string | null;
  followed: boolean;
};

export type initialStateType = {
  users: Array<userType>;
};

let initialState: initialStateType = {
  users: [],
};

export const usersReducer = (
  state = initialState,
  action: allTypes
): initialStateType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((m) =>
          m.id === action.userID ? { ...m, followed: true } : m
        ),
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((m) =>
          m.id === action.userID ? { ...m, followed: false } : m
        ),
      };
    }
    case "SET_USERS": {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};
export type allTypes = followACType | unFollowACType | setUserACType;

export type followACType = ReturnType<typeof followAC>;
export type unFollowACType = ReturnType<typeof unFollowAC>;
export type setUserACType = ReturnType<typeof setUserAC>;

export const followAC = (userID: number) =>
  ({ type: "FOLLOW", userID } as const);
export const unFollowAC = (userID: number) =>
  ({ type: "UNFOLLOW", userID } as const);
export const setUserAC = (users: Array<userType>) =>
  ({ type: "SET_USERS", users } as const);
