export type initialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean
};
let initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

export const authReducer = (
  state = initialState,
  action: setAuthUserDataType
): initialStateType => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return { ...state, ...action.data, isAuth: true };
    }
    default:
      return state;
  }
};

export type setAuthUserDataType = ReturnType<typeof setAuthUserData>;
export const setAuthUserData = (id: number, email: string, login: string) => {
  return {
    type: "SET_USER_DATA",
    data: { id, email, login },
  };
};
