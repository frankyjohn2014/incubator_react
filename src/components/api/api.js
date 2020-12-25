import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    headers: {'API-KEY':'2058b070-11d2-48b3-9c67-098143aace3e'}
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
    saveProfile(profile) {
        return instance.put(`/profile/`, profile )
    },
}

export const SecurityApi = {
    getCaptcha() {
        return instance.get(`/security/get-captcha-url`).then(response => {
            return response.data
        })
    }
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
    setLookingForaJob() {
        return instance.put(`/profile/lookingForAJobDescription`, {status: "text"} )
    },
    savePhotoApi(file) {
        const formData = new FormData()
        formData.append("image",file)
        return instance.put(`/profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}} )
    },

}

export const AuthApi = {
    me() {
        return instance.get(`/auth/me`)
    },
    login(email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
    },
}




