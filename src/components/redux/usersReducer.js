const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // {id:1, followed: true,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Dmitriy!", status:'Python', location:{city:'Minsk',country:'Belarus'}},
        // {id:2, followed: false,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Vasya!", status:'Ruby', location:{city:'Kiev',country:'Ukraine'}},
        // {id:3, followed: true,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Sergey!", status:'JavaScript', location:{city:'Moskow',country:'Russia'}},
    ]
}

const usersReducers =(state=initialState,action) => {

    switch(action.type) {
        case FOLLOW: {
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u
                })}
            }

        case UNFOLLOW: {
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })}
            }
        case SET_USERS: {
            return { ...state, users:[ ...state.users, ...action.users]}}
        default:
            return state
    }
} 

export let followAC = (userId) => {
    return { type : FOLLOW, userId}
}

export let unfollowAC = (userId) => {
    return {type:UNFOLLOW, userId}
}

export let setUsersAC = (users) => {
    return {type:SET_USERS, users}
}

export default usersReducers;