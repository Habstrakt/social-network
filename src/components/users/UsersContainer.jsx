import React from "react";
import {connect} from "react-redux";
import {
		follow,
		setCurrentPage,
		unfollow, toggleFollowingProgress, getUserThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {
		componentDidMount() {
				this.props.getUsers(this.props.currentPage, this.props.pageSize);
		}

		onPageChanged = (pageNumber) => {
				this.props.getUsers(pageNumber, this.props.pageSize);

				// this.props.toggleIsFetching(true);
				// this.props.setCurrentPage(pageNumber);
				//
				// usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
				// 				this.props.toggleIsFetching(false);
				// 				this.props.setUsers(data.items);
				// 		});
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
									 followingInProgress={this.props.followingInProgress}
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
				isFetching: state.usersPage.isFetching,
				followingInProgress: state.usersPage.followingInProgress
		}
}

export default compose(
		connect(mapStateToProps, {
				follow,
				unfollow,
				setCurrentPage,
				toggleFollowingProgress,
				getUsers: getUserThunkCreator
		}),
		withAuthRedirect
)(UsersContainer)


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