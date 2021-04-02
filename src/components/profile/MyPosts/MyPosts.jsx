import React from 'react';
import styleProfile from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
		return (
				<form onSubmit={props.handleSubmit}>
						<div>
								<Field name="newPostText" component={Textarea} validate={[required, maxLength10]} placeholder={"Post message"} />
						</div>
						<div>
								<button>Add Post</button>
						</div>
				</form>
		)
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"}) (AddNewPostForm);

const MyPosts = (props) => {

		let postsElements =
				[...props.posts]
						.reverse()
						.map(post => <Post
								message={post.message}
								likeCount={post.likesCount}
						/>);

		let newPostElement = React.createRef();

		let onAddPost = (values) => {
				props.addPost(values.newPostText);
				// props.dispatch(addPostActionCreator())
		};

		return (
				<div className={styleProfile.postsBlock}>
						<h3>My posts</h3>
						<AddNewPostFormRedux onSubmit={onAddPost}/>
						<div className={styleProfile.posts}>
								{postsElements}
						</div>
				</div>
		)
}



export default MyPosts;