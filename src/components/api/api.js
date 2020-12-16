import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    headers: {'API-KEY':'7b14e426-fa0c-47bc-a6f8-9026a4b30723'}
})



export const UserApi = {
    getAllUsers(activePage,pageUserCount) {
        return instance.get(`/users?page=${activePage}&count=${pageUserCount}`).then(response => {
            return response.data
        })
    },
    setUnfollow (id) {
        return instance.delete(`/follow/`+ id).then(response => {
            return response.data
        })
    },
    setFollow (id) {
        return instance.post(`/follow/`+ id).then(response => {
            return response.data
        })
    },
    getProfile(UserId) {
        return ProfileApi.getProfile(UserId)
    },
}

export const ProfileApi = {
    getProfile(UserId) {
        return instance.get(`/profile/`+ UserId )
    },
    getStatus(UserId) {
        return instance.get(`/profile/status/`+ UserId )
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status} )
    },
}

export const AuthApi = {
    me()  {
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe)  {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout()  {
        return instance.delete(`/auth/login`)
    },



}




