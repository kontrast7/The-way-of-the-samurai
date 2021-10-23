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
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
};

let initialState: initialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
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
      return { ...state, users: action.users };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};
export type allTypes =
  | followACType
  | unFollowACType
  | setUserACType
  | setCurrentPageACType
  | setTotalUsersCountACType
  | toggleIsFetchingACType;

export type followACType = ReturnType<typeof follow>;
export type unFollowACType = ReturnType<typeof unFollow>;
export type setUserACType = ReturnType<typeof setUser>;
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>;
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>;
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>;

export const follow = (userID: number) =>
  ({ type: "FOLLOW", userID } as const);
export const unFollow = (userID: number) =>
  ({ type: "UNFOLLOW", userID } as const);
export const setUser = (users: Array<userType>) =>
  ({ type: "SET_USERS", users } as const);
export const setCurrentPage = (currentPage: number) =>
  ({ type: "SET_CURRENT_PAGE", currentPage } as const);
export const setTotalUsersCount = (totalCount: number) =>
  ({ type: "SET_TOTAL_USERS_COUNT", totalCount } as const);
export const toggleIsFetching = (isFetching: boolean) =>
  ({ type: "TOGGLE_IS_FETCHING", isFetching } as const);
