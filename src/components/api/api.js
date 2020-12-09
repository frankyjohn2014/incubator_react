import * as axios from 'axios'

let instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0',
    headers: {'API-KEY':'58a4bd53-ca1a-44a2-a8d0-3d3810e31056'}
})

export const getUsers = (activePage,pageUserCount) => {
    return instance.get(`/users?page=${activePage}&count=${pageUserCount}`).then(response => {
        return response.data
    })
}


export const setUnfollow = (id) => {
    return instance.delete(`/follow/`+ id).then(response => {
        return response.data
    })
}

export const setFollow = (id) => {
    return instance.post(`/follow/`+ id).then(response => {
        return response.data
    })
}

