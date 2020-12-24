import React from 'react'
import { Redirect } from 'react-router-dom'
import { Input } from '../../common/FormsControls/FormsControls'
import { Field,reduxForm } from 'redux-form'

const EditProfile = (props) => {
    return (
        <div>
            <ProfileReduxForm contacts={props.contacts}editModeValue={props.editModeValue} initialValues={props.initialValues} onSubmit={props.onSubmit} forms={props.forms} saveForm={props.saveForm}/>
            {/* <ProfileReduxForm onSubmit={onSubmit} forms={props.forms}/> */}
        </div>
    )
}

const ProfileForm = (props) => {
  
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button>Save</button>
                <div>
                    <b>{props.error}</b>
                </div>
                <div>
                    About Me:
                </div>
                <div>
                    <Field placeholder={" About Me:"} name={"aboutMe"} component ={Input}/>
                </div>
                <div>
                    FullName
                </div>
                <div>
                    <Field placeholder={"fullName"} name={"fullName"} component ={Input}/>
                </div>
                <div>
                    lookingForAJob:
                </div>
                <div>
                    <Field type={"checkbox"} name={"lookingForAJob"} component ={Input}/>
                </div>
                <div>
                    <b>My proffessional skill</b>: 
                </div>
                <div>
                    <Field placeholder={"lookingForAJobDescription"} name={"lookingForAJobDescription"} component ={Input}/>
                </div>
                <div>
                    <b>Contacts:</b>
                </div>
                <div>
                    {props.contacts.map((e) => 
                        <Field key={e.key} placeholder={(e.key)} name={"contacts."+(e.key)} component ={Input}/>
                    )}
                    
                </div>

                <hr/>
            </form>
        </div>
    )
}
const ProfileReduxForm = reduxForm({form: 'edit-profile'})(ProfileForm)

export default EditProfile