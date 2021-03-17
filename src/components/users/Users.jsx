import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/img/avatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		let pages = [];

		for (let i = 1; i <= pagesCount; i++) {
				pages.push(i);
		}


		return <div>
				<div>
						{pages.map(page => {
								return <span className={props.currentPage === page ? styles.selectedPage : ''}
														 onClick={(e) => {
																 props.onPageChanged(page);
														 }}>{page}</span>
						})}
				</div>
				{
						props.users.map(user => <div key={user.id}>
						<span>
										<div>
												<NavLink to={'/profile/' + user.id}>
												<img src={user.photos.small != null ? user.photos.small : userPhoto}
														 className={styles.userPhoto}/>
												</NavLink>
										</div>
										<div>
												{user.followed ?
														<button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
																props.toggleFollowingProgress(true, user.id);
																axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
																		{
																				withCredentials: true,
																				headers: {
																						"API-KEY": "0901725d-d6e7-40d7-a7ec-4ae94c627b77"
																				}
																		})
																		.then(response => {
																				if (response.data.resultCode === 0) {
																						props.unfollow(user.id);
																				}
																				props.toggleFollowingProgress(false, user.id);
																		});

														}}>Отписка</button>
														: <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
																props.toggleFollowingProgress(true, user.id);
																axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
																		{
																				withCredentials: true,
																				headers: {
																						"API-KEY": "0901725d-d6e7-40d7-a7ec-4ae94c627b77"
																				}
																		})
																		.then(response => {
																				if (response.data.resultCode === 0) {
																						props.follow(user.id);
																				}
																				props.toggleFollowingProgress(false, user.id);
																		});

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
						</div>)
				}
		</div>
}

export default Users;