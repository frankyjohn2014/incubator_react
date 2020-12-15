import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field,reduxForm } from 'redux-form'

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
                    <Field placeholder={"Login"} name={"login"} component ={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component ={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component ={"input"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Auth