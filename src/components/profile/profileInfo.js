import React from 'react'
import Spinner from '../common/spinner/spinner'

const ProfileInfo = (props) => {
    console.log(props)
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
            <div>
                {!props.login.isAuth ? <text>No log in</text> : 
                <div>
                    <text>{props.login.email}</text>
                    <br/>
                    <button onClick={props.logoutReducer}> Logout </button>
                </div>}
            </div>


        </div>
    )
}

export default ProfileInfo