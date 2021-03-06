import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

		return (

				<div>
						<span>
										<div>
												<NavLink to={'/profile/' + user.id}>
												<img src={user.photos.small != null ? user.photos.small : userPhoto}
														 className={styles.userPhoto}/>
												</NavLink>
										</div>
										<div>
												{user.followed ?
														<button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
																unfollow(user.id);
														}}>Отписка</button>
														: <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
																follow(user.id);
														}}>Подписка</button>}
										</div>
						</span>
						<span>
										<span>
												<div>{user.name}</div>
												<div>{user.status}</div>
										</span>
										<span>
												<div>{'user.location.country'}</div>
												<div>{'user.location.city'}</div>
										</span>
						</span>
				</div>
		)
}

export default User;