import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../images/default-ava.png';
import { NavLink } from 'react-router-dom';
import { onFollow, onUnFollow } from '../../API/api';

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        };
    return(
        <div className={style.userBlock}>
                <div className={style.pageNumber}>
                    <ul className={style.pageNumberList}>
                        {pages.map((page)=> {
                            return (
                                <li onClick={()=>{props.onPageChanged(page)}} className={props.currentPage === page ? style.selected : ''} key={page}>
                                    {page}
                                </li>
                                )
                        })}
                    </ul>
                </div>
                {props.users.map( 
                    (user) => 
                        <div key={user.id} className={style.userInfo}>
                            <div className={style.leftColumn}>
                                <div>
                                    <div className={style.avatar}> 
                                        <NavLink to={'/profile/' + user.id}>
                                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='avatar'/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {user.followed 
                                            ? <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                                    props.toggleIsFollowing(true, user.id);
                                                onUnFollow(user.id).then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.unfollow(user.id)
                                                        }
                                                    props.toggleIsFollowing(false, user.id);
                                                    })
                                            }}>Unfollow</button> 
                                            : <button disabled={props.isFollowing.some(id => id === user.id)} onClick={() => {
                                                    props.toggleIsFollowing(true, user.id);
                                                    onFollow(user.id).then(data => {
                                                        if (data.resultCode === 0) {
                                                            props.follow(user.id)
                                                        }
                                                    props.toggleIsFollowing(false, user.id);
                                                    })
                                                }}>Follow</button> }
                                    </div>
                                </div>
                                <div>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                            </div>
                            <div className={style.rightColumn}>
                                <div>{"user.location.city"}</div>
                                <div>{"user.location.country"}</div>
                            </div>
                        </div>
                    
                )}
            </div>
    )
}

export default Users;