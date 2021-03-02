import React from "react";
import styleNav from "../Nav.module.css";

const NavFriend = (props) => {
		return (
				<div >
						<div className={styleNav.friendItem}>
								<a href='#'>{props.name}</a>
						</div>
				</div>
		)
}



export default NavFriend;