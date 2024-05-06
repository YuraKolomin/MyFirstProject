import React from 'react';
import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginError: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_LOGIN_ERROR:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const getAuthThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuth();
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setUserData(id, email, login, true))
            }
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    dispatch(setLoginError(null));
    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthThunk())
            } else {
                dispatch(setLoginError(response.data.messages.join(' ')))
            }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})
export const setLoginError = (loginError) => ({type: SET_LOGIN_ERROR, data: {loginError}})
export default authReducer;