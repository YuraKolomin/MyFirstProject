import React from 'react';
import {getAuthThunk} from "./auth_reducer";

const INITIALIZED_SECCESS = 'INITIALIZED_SECCESS';
let initialState = {
    initialized: false
};
function appReducer(state = initialState, action) {
    switch (action.type) {
        case INITIALIZED_SECCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthThunk());
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export const initializedSuccess = () => ({type: INITIALIZED_SECCESS})
export default appReducer;