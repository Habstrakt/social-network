import React from 'react';
import styleProfile from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

		let postsElements =
				props.posts.map(post =>
						<Post
								message={post.message}
								likeCount={post.likesCount}
						/>);

		let newPostElement = React.createRef();

		let onAddPost = () => {
				props.addPost();
				// props.dispatch(addPostActionCreator())
		};

		let onPostChange = () => {
				let text = newPostElement.current.value;
				// let action = updateNewPostTextActionCreator(text);
				// props.dispatch(action);
				props.updateNewPostText(text);
		};

		return (
				<div className={styleProfile.postsBlock}>
						<h3>My posts</h3>
						<div>
								<div>
										<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}  />
								</div>
								<div>
										<button onClick={onAddPost}>Add Post</button>
								</div>
						</div>
						<div className={styleProfile.posts}>
								{postsElements}
						</div>
				</div>
		)
}

export default MyPosts;