import React from 'react'
import PostsContainer from "../posts/postsContainer"
import ProfileInfo from './profileInfo'
import ProfileStatus from './profileStatus'


const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileStatus status = {props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile.profile} />
        </div>
    )
}

export default Profile