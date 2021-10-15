import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import { usersReducer } from "./usersReducer";

export type AppStateType = ReturnType<typeof reducers>;

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

//@ts-ignore
window.store = store;

export default store;
