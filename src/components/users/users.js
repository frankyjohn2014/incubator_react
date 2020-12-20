import React, { useState } from 'react';
import styles from './users.module.css'
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageUserCount)
    const pageFilter = 10
    let pages = []
    for (let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }

    let [activePage, setActivePage] = useState(1)
    let filterPageSize = Math.ceil(pagesCount/pageFilter)
    let leftPages = (activePage - 1) * pageFilter + 1
    let rightPages = activePage * pageFilter
    return (
        <div className={styles.paginator}>
            {activePage > 1 && <button onClick={()=> {setActivePage(activePage-1)}}>Left</button>} 
            <div className={styles}>
                {pages.filter(p => p>=leftPages && p <= rightPages).map(p => {
                    return <span className={props.activePage === p && styles.activePage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>})
}
            </div>
            {filterPageSize > activePage && <button onClick={()=> {setActivePage(activePage+1)}}>Right</button>}
        {
        props.users.users.map(u => <div key={u.id}>
            <span >
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt= 'test' src={u.photos.small != null ? u.photos.small : 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?  
                    <button disabled={props.followinginProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : 
                    <button disabled={props.followinginProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id)}}>Follow</button>}
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