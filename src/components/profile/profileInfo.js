import React from 'react'
import Spinner from '../common/spinner/spinner'
import avatar from '../../static/avatar.jpg'
const ProfileInfo = (props) => {
    let state = {...props.profile}
    if (!props.profile) {
        return <Spinner/>
    }

    let loadPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                About Me : {state.aboutMe}
            </div>
            <hr/>   
            <div>
               {state.fullName}
            </div>
            <hr/>
            <img src={props.profile.photos.large || avatar} alt=""/>
            <br/>
            <hr/>
            <div>
                {props.isOwner &&  <input onChange={loadPhoto} type={"file"}/>}
            </div>
            <hr/>
            <div>
                <p>
                lookingForAJob : {state.lookingForAJobDescription}
                </p>
            </div>
            <div>
                {!props.login.isAuth ? <div>No log in</div> : 
                <div>
                    <div>{props.login.email}</div>
                    <br/>
                    <button onClick={props.logoutReducer}> Logout </button>
                </div>}
            </div>


        </div>
    )
}

export default ProfileInfo