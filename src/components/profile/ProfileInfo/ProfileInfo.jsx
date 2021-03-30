import React from "react";
import styleProfileInfo from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

		if(!props.profile) {
				return <Preloader/>
		}
		return (
				<div>
						{/*<div>*/}
						{/*		<img src="https://gutta.lv/wp-content/uploads/2015/10/test-img.jpg" alt="" />*/}
						{/*</div>*/}
						<div className={styleProfileInfo.descrBlog}>
								<img src={props.profile.photos.large} alt=""/>
								<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
						</div>
						<a>{props.profile.contacts.vk}</a>
						<p>{props.profile.lookingForAJobDescription}</p>
						<p>{props.profile.fullName}</p>
				</div>
		)
}

export default ProfileInfo;