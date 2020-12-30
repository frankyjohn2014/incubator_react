import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../paginator/paginator';
import styles from './users.module.css'
import {UsersType} from './usersReducer'

type UsersCompType = {
    activePage:number,
    onPageChanged:any,
    pageUserCount: number,
    totalUserCount:number,
    follow:any,
    followinginProgress:Array<number>,
    unfollow:any,
    users:Array<UsersType>,
}

let Users:React.FC<UsersCompType> = ({activePage,onPageChanged,pageUserCount,totalUserCount,follow,followinginProgress,unfollow, users}) => {
    return (
        <div>
        <Paginator activePageProps={activePage} onPageChanged={onPageChanged} pageUserCount={pageUserCount} totalUserCount={totalUserCount}/>
        {
        users.map(u => <div key={u.id}>
            <span >
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt= 'test' src={u.photos.small != null ? u.photos.small : 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?  
                    <button disabled={followinginProgress.some(id => id === u.id)} onClick={() => {unfollow(u.id)}}>Unfollow</button>
                    : 
                    <button disabled={followinginProgress.some(id => id === u.id)} onClick={() => {follow(u.id)}}>Follow</button>}
                </div>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    {/* <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span> */}
                </span>
            </span>
        </div>)}
    </div>
    )
}

export default Users;