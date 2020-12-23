import React, { useState } from 'react'
import Spinner from '../common/spinner/spinner'
import avatar from '../../static/avatar.jpg'
import { ProfileContacts } from './profileContacts'
import EditProfile from './profileForm/profileForm'
import ProfileInfoComponent from './profileInfoComponent'
const ProfileInfo = (props) => {
    const [editMode, setMode] = useState(true)
    let editStatus = () => {
        setMode(false)
    }

    let saveForm = () => {
        setMode(true)
    }
    if (!props.profile) {
        return <Spinner/>
    }
    let loadPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let contacts =  Object.keys(props.profile.contacts).map((e) => { return <ProfileContacts key={e} contactTitle={e} contactValue={props.profile.contacts[e]}/>})
    return (
        <div>
            <img src={props.profile.photos.large || avatar} alt=""/>
            <div>
                {props.isOwner &&  <input onChange={loadPhoto} type={"file"}/>}
            </div>
            <hr/>
            {editMode && <ProfileInfoComponent profile={props.profile} contacts={contacts} editStatus={editStatus}/>}
            {!editMode && <EditProfile onSubmit={props.onSubmit} saveForm={saveForm}/>}
        </div>
    )
}

export default ProfileInfo