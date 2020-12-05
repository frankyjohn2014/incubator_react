import React from 'react';
import styles from './users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.users.activePage}&count=${this.props.users.pageUserCount}`)
        .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.users.pageUserCount}`)
        .then(response => {
            this.props.setUsers(response.data.items)

        }
        )
    }

    render() {
        let pagesCount = Math.ceil(this.props.users.totalUserCount / this.props.users.pageUserCount)

        let pages = []
        for (let i = 1; i<=pagesCount; i++) {
            pages.push(i)
        }
        return <div> 
            <div>
                {pages.map(p => {
                    return <span className={this.props.users.activePage === p && styles.activePage} onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                })}
                
            </div>
        {
        this.props.users.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed ?  
                    <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>: 
                    <button onClick={() => {this.props.follow(u.id)}}>Follow</button>  }
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
    }

    // {id:1, followed: true,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Dmitriy!", status:'Python', location:{city:'Minsk',country:'Belarus'}},
    // {id:2, followed: false,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Vasya!", status:'Ruby', location:{city:'Kiev',country:'Ukraine'}},
    // {id:3, followed: true,photoUrl:'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg', name:"Sergey!", status:'JavaScript', location:{city:'Moskow',country:'Russia'}},
    
}

export default Users;