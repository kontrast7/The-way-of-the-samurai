import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export type AppStateType = ReturnType<typeof reducers>;

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
});

let store = createStore(reducers);


export default store;
