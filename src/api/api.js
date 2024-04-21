import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "2ea12174-8aa8-42f6-bc83-095c2849855a"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data})
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId) {
        return profileAPI.getUserProfile(userId)
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`, {withCredentials: true})
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

