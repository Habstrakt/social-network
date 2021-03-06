import React from "react";
import styles from "./Users.module.css";
import * as axios from "axios";
import userPhoto from '../../assets/img/avatar.jpg';

let UsersFunction = (props) => {
		let getUsers = () => {
				if (props.users.length === 0) {
						axios.get('https://social-network.samuraijs.com/api/1.0/users')
								.then(response => {
										props.setUsers(response.data.items);
								});
				}
		}


		return <div>
				<button onClick={getUsers}>GetUsers</button>
				{
						props.users.map(user => <div key={user.id}>
						<span>
										<div>
												<img src={user.photos.small !=null ? user.photos.small : userPhoto}
														 className={styles.userPhoto}/>
										</div>
										<div>
												{ user.followed ?
														<button onClick={ () => {props.unfollow(user.id)} } >unFollow</button>
														: <button onClick={ () => {props.follow(user.id)} }>Follow</button> }
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
						</div>)
				}
		</div>
}

export default UsersFunction;