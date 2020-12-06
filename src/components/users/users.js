import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageUserCount)
        let pages = []
        for (let i = 1; i<=pagesCount; i++) {
            pages.push(i)
        }
    return (
        <div> 
            <div>
                {pages.map(p => {
                    return <span className={props.activePage === p && styles.activePage} onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                })}
            </div>
        {
        props.users.users.map(u => <div key={u.id}>
            <span >
                <div>
                    <img alt= 'test' src={u.photos.small != null ? u.photos.small : 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?  
                    <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>: 
                    <button onClick={() => {props.follow(u.id)}}>Follow</button>  }
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