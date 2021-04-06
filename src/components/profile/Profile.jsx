import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

		return (
				<section>
						<ProfileInfo profile={props.profile} status={props.status}
												 isOwner={props.isOwner}
												 updateStatus={props.updateStatus}
												 savePhoto={props.savePhoto}/>
						<MyPostsContainer />
				</section>

		)
}

export default Profile;
