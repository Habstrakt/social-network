import React from "react";
import styleProfileInfo from './ProfileInfo.module.css';
import userPhoto from "../../../assets/img/avatar.jpg";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

		if(!profile) {
				return <Preloader/>
		}

		const mainPhotoSelected = (e) => {
				if (e.target.files.length) {
						savePhoto(e.target.files[0])
				}
		}

		return (
				<div>
						{/*<div>*/}
						{/*		<img src="https://gutta.lv/wp-content/uploads/2015/10/test-img.jpg" alt="" />*/}
						{/*</div>*/}
						<div className={styleProfileInfo.descrBlog}>
								<img src={profile.photos.large || userPhoto} className={styleProfileInfo.mainPhoto} alt=""/>
								{isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
								<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
						</div>
						<a>{profile.contacts.vk}</a>
						<p>{profile.lookingForAJobDescription}</p>
						<p>{profile.fullName}</p>
				</div>
		)
}

export default ProfileInfo;