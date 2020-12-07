import React from 'react'
import PostsContainer from "../posts/postsContainer"
import ProfileInfo from './profileInfo'


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile