import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";

export type AppStateType = ReturnType<typeof reducers>;

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers);

//@ts-ignore
window.store = store;

export default store;
