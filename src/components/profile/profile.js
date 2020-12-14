import React from 'react'
import PostsContainer from "../posts/postsContainer"
import ProfileInfo from './profileInfo'
import ProfileStatus from './profileStatus'


const Profile = (props) => {
    return (
        <div>
            <ProfileStatus/>
            <ProfileInfo profile={props.profile.profile}/>
        </div>
    )
}

export default Profile