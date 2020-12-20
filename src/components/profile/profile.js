import React from 'react'
import ProfileInfo from './profileInfo'
import ProfileStatus from './hookprofileStatus'


const Profile = React.memo(props => {
    return (
        <div>
            <ProfileStatus status = {props.status} updateStatus={props.updateStatus}/>
            <ProfileInfo profile={props.profile.profile} login={props.login} logoutReducer={props.logoutReducer}/>
        </div>
    )
})

export default Profile