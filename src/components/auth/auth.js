import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field,reduxForm } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../validators/validators'

const Auth = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
           <h1>LOGIN:</h1> {props.login.isAuth ? props.login.data.login : <NavLink to="/login" >Auth</NavLink>}  
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component ={Input}
                    validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} validate={[required]} name={"password"} component ={Input}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component ={Input}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Auth