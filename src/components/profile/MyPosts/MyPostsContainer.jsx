import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
		return {
				posts: state.profilePage.posts,
				newPostText: state.profilePage.newPostText
		}
}

const mapDispatchToProps = (dispatch) => {
		return {
				addPost: () => {
						dispatch(addPostActionCreator())
				},

				updateNewPostText: (text) => {
						let action = updateNewPostTextActionCreator(text);
						dispatch(action);
				}
		}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;



/*
const MyPostsContainer = (props) => {
		let state = props.store.getState();


		let addPost = () => {
				// let action = addPostActionCreator;
				// props.store.dispatch(action);
				props.store.dispatch(addPostActionCreator())
		};

		let onPostChange = (text) => {
				// props.updateNewPostText(text);
				let action = updateNewPostTextActionCreator(text);
				props.store.dispatch(action);
		};

		return (
				<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
				newPostText={state.profilePage.newPostText}/>
		)
}
 */