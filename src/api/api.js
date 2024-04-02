import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "2ea12174-8aa8-42f6-bc83-095c2849855a"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const unFollowUser = (id, unFollow) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return
            if (response.data.resultCode === 0) {
                unFollow(id)
            }
        })
}

export const FollowUser = (id, follow) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return
            if (response.data.resultCode === 0) {
                follow(id)
            }
        })
}

export const UserLog = (setUserData) => {
    return instance.get(`auth/me`)
        .then(response => {
            return
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                setUserData(id, email, login)
            }
        })
}