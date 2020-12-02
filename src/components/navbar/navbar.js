import React from 'react';
import classes from './navbar.module.css'
import Posts from '../posts/posts';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <div className={classes.topnav} id="myTopnav">
                <div className={classes.item}>
                    <NavLink to="/"  >Home</NavLink>
                </div>
                <div>
                    <NavLink to="/posts" activeClassName={classes.active}>Posts</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink>
                </div>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>

    )
}

export default Navbar;