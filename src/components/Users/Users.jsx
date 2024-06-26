import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assetc/images/default_users.png";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
let Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
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
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.unFollow(u.id);}}
                        >Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {props.follow(u.id);}}
                        >Follow</button>
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