import React from "react";
import {connect} from "react-redux";
import {
		follow,
		setCurrentPage,
		setUsers, setTotalUsersCount, toggleIsFetching,
		unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


class UsersContainer extends React.Component {
		componentDidMount() {
				this.props.toggleIsFetching(true);
				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
						.then(response => {
								this.props.toggleIsFetching(false);
								this.props.setUsers(response.data.items);
								this.props.setTotalUsersCount(response.data.totalCount);
						});
		}

		onPageChanged = (pageNumber) => {
				this.props.toggleIsFetching(true);
				this.props.setCurrentPage(pageNumber);

				axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
						.then(response => {
								this.props.toggleIsFetching(false);
								this.props.setUsers(response.data.items);
						});
		}

		render() {
				return <>
						{this.props.isFetching ? <Preloader/> : null}
						<Users totalUsersCount={this.props.totalUsersCount}
									 pageSize={this.props.pageSize}
									 currentPage={this.props.currentPage}
									 onPageChanged={this.onPageChanged}
									 users={this.props.users}
									 follow={this.props.follow}
									 unfollow={this.props.unfollow}
						/>
				</>
		}
}


let mapStateToProps = (state) => {
		return {
				users: state.usersPage.users,
				pageSize: state.usersPage.pageSize,
				totalUsersCount: state.usersPage.totalUsersCount,
				currentPage: state.usersPage.currentPage,
				isFetching: state.usersPage.isFetching
		}
}


export default connect(mapStateToProps, {
		follow,
		unfollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCount,
		toggleIsFetching
})(UsersContainer);


// let mapDispatchToProps = (dispatch) => {
// 		return {
// 				follow: (userId) => {
// 						dispatch(followActionCreator(userId));
// 				},
// 				unfollow: (userId) => {
// 						dispatch(unfollowActionCreator(userId));
// 				},
// 				setUsers: (users) => {
// 						dispatch(setUsersActionCreator(users));
// 				},
// 				setCurrentPage: (pageNumber) => {
// 						dispatch(setCurrentPageActionCreator(pageNumber));
// 				},
// 				setTotalUsersCount: (totalCount) => {
// 						dispatch(setUsersTotalCount(totalCount));
// 				},
// 				toggleIsFetching: (isFetching) => {
// 						dispatch(toggleIsFetchingActionCreator(isFetching));
// 				}
// 		}
// }