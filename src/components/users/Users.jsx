import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {


		return <div>

				<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
									 totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
				<div>
						{
								props.users.map(user => <User user={user} key={user.id}
																							followingInProgress={props.followingInProgress}
																							unfollow={props.unfollow} follow={props.follow}/>
								)
						}
				</div>
		</div>
}

export default Users;