import React from 'react'
import Spinner from '../common/spinner/spinner'

const ProfileInfo = (props) => {
    let state = {...props.profile}
    if (!props.profile) {
        return <Spinner/>
    }
    return (
        <div>
            <div>
                About Me : {state.aboutMe}
            </div>
            <div>
               {state.fullName}
            </div>
            <img src={props.profile.photos.large} alt=""/>
            <div>
                <p>
                lookingForAJob : {state.lookingForAJobDescription}
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo