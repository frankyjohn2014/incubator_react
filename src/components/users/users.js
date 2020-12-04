import React from 'react';
import styles from './users.module.css'

const Users = (props) => {
    if (props.users.users.length ===0) {
        props.setUsers([
            {id:1, followed: true,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Dmitriy!", status:'Python', location:{city:'Minsk',country:'Belarus'}},
            {id:2, followed: false,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Vasya!", status:'Ruby', location:{city:'Kiev',country:'Ukraine'}},
            {id:3, followed: true,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Sergey!", status:'JavaScript', location:{city:'Moskow',country:'Russia'}},
        ]
        )
    }

    return <div> 
        {
        props.users.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
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
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users;