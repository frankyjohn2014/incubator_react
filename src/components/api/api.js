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
        return instance.get(`/profile/`+ UserId )
    },
}

export const AuthApi = {
    me()  {
        return instance.get(`/auth/me`)
    },


}




