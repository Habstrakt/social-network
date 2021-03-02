import React from "react";
import styleProfileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
		return (
				<div>
						<div>
								<img src="https://gutta.lv/wp-content/uploads/2015/10/test-img.jpg" alt="" />
						</div>
						<div className={styleProfileInfo.descrBlog}>
								avatar and descr
						</div>
				</div>
		)
}

export default ProfileInfo;