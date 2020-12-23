import React from 'react'
import {reduxForm } from 'redux-form'

const editProfile = (props) => {
    // const onSubmit = (formData) => {
    //     props.loginReducer(formData.email, formData.password, formData.rememberMe)
    // }
    if (props.stateLogin.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <ProfileReduxForm onSubmit={onSubmit} forms={props.forms}/>
        </div>
    )
}

const ProfileForm = (props) => {
    return (
        <div>
            <h1>Form</h1>
        </div>
            //     <div>
            //     <form onSubmit={props.handleSubmit}>
            //         <div>
            //             <Field placeholder={"Email"} name={"email"} component ={Input}
            //             validate={[required]}/>
            //         </div>
            //         <div>
            //             <Field placeholder={"Password"} validate={[required]} type={"password"} name={"password"}  component ={Input}/>
            //         </div>
            //         <div>
            //             <Field type={"checkbox"} name={"rememberMe"} component ={Input}/> remember me
            //         </div>
            //         {props.error && <div className={styles.formSummError}>
            //             {props.error}
            //         </div>}
            //         <div>
            //             <button>Login</button>
            //         </div>
            //     </form>
            // </div>
    )}

const ProfileReduxForm = reduxForm({form: 'profile'})(ProfileForm)

export default editProfile