import React from 'react'
import PostsContainer from "../posts/postsContainer"
import ProfileInfo from './profileInfo'
import ProfileStatus from './profileStatus'


const Profile = (props) => {
    return (
        <div>
            <ProfileStatus status = {props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile.profile} login={props.login} logoutReducer={props.logoutReducer}/>
        </div>
    )
}

export default Profile