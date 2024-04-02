import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assetc/images/default_users.png";
import {NavLink} from "react-router-dom";
import {FollowUser, unFollowUser} from "../../api/api";
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt=''/>
                        </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=> id === u.id )} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "2ea12174-8aa8-42f6-bc83-095c2849855a"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                            /* unFollowUser(u.id).then(data => {
                                 props.unFollow(u.id)

                             })*/

                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id=> id === u.id )} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {"API-KEY": "2ea12174-8aa8-42f6-bc83-095c2849855a"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });
                            /*FollowUser(u.id).then(data => {
                                props.follow(u.id)
                            })*/
                        }}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
            </div>)
        }
    </div>

}

export default Users;