import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

		return (
				<section>
						<ProfileInfo/>
						<MyPostsContainer store={props.store}
						/>
				</section>

		)
}

export default Profile;
