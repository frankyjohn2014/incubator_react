import React from 'react'
import Spinner from '../common/spinner/spinner'
import avatar from '../../static/avatar.jpg'
import { ProfileContacts } from './profileContacts'
import editProfile from './profileForm/profileForm'
import ProfileInfoComponent from './profileInfoComponent'
const ProfileInfo = (props) => {
    const [editMode, setMode] = useState(false)
    if (!props.profile) {
        return <Spinner/>
    }
    let loadPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    let contacts =  Object.keys(state.contacts).map((e) => { return <ProfileContacts key={e} contactTitle={e} contactValue={state.contacts[e]}/>})
    return (
        <div>
            <img src={props.profile.photos.large || avatar} alt=""/>
            <div>
                {props.isOwner &&  <input onChange={loadPhoto} type={"file"}/>}
            </div>
            <hr/>
            {editMode && <ProfileInfoComponent props={props.profile} contacts={contacts}/>}
            {!editMode && <editProfile/>}
        </div>
    )
}

export default ProfileInfo