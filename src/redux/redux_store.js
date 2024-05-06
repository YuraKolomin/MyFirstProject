import {applyMiddleware, combineReducers} from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import {thunk} from "redux-thunk";
import appReducer from "./app_reducer";

const thunkMiddleware = thunk;
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});
export let store = configureStore({
    reducer: reducers}, applyMiddleware(thunkMiddleware));
export default store;
