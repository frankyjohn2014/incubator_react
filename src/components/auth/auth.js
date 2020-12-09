import React from 'react'
import { NavLink } from 'react-router-dom'

const Auth = (props) => {
    return (
        <div>
           LOGIN : {props.login.isAuth ? props.login.data.login : <NavLink to="/login" >Login</NavLink>}  
        </div>
    )}

export default Auth