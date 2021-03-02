import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

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

export default MyPostsContainer;