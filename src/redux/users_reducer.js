import {usersAPI} from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
users: [],
    pageSize:10,
    totalUsersCount: 0,
    currentPage :1,
    isFetching: true,
    followingInProgress: []

};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                )
            }
        case SET_USERS:
            return {...state, users: action.users}
        case  SET_CURRENT_PAGE:
            return {
            ...state, currentPage: action.currentPage
        }
        case SET_TOTAL_USERS_COUNT: return {
        ...state, totalUsersCount: action.count
        }
        case TOGGLE_IS_FETCHING: return{
            ...state, isFetching: action.isFetching
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
        }
        default:
            return state;
    }
}
export const followSuccess = (userId) => ({type:FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type:UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
            dispatch(setCurrentPage(currentPage))
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.follow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unFollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersAPI.unFollow(userId)
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducer;