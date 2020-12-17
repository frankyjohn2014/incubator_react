import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Field,reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../validators/validators'
import styles from '../common/FormsControls/FormsControls.module.css'


const Auth = (props) => {
    const onSubmit = (formData) => {
        props.loginReducer(formData.email, formData.password, formData.rememberMe)
    }
    if (props.stateLogin.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
           <h1>LOGIN: </h1> {props.stateLogin.isAuth ? props.stateLogin.email : <NavLink to="/login" >Auth</NavLink>}  
            <LoginReduxForm onSubmit={onSubmit} forms={props.forms}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component ={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} validate={[required]} type={"password"} name={"password"}  component ={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component ={Input}/> remember me
                </div>
                {props.error && <div className={styles.formSummError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Auth