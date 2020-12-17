import React from 'react';
import classes from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
            <div className={classes.topnav} id="myTopnav">
                <div className={classes.item}>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/profile/" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                </div>
                <div>
                    <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
                </div>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <div>
                    <NavLink to="/login" activeClassName={classes.active}>Login</NavLink>
                </div>
            </div>

    )
}

export default Navbar;