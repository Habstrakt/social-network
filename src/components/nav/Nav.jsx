import React from 'react';
import NavItem from "./NavItem/NavItem";
import NavFriend from "./NavFriend/NavFriend";
import styleNav from "./Nav.module.css";


const Nav = (props) => {
		 let friendsElement = props.sidebar.friends.map(friend => <NavFriend name={friend.name} />);
		return (
				<div>
						<nav className={styleNav.nav}>
								<div>
										<NavItem />
								</div>
								Friends
								<div className={styleNav.friendList}>{friendsElement}</div>
						</nav>
				</div>
		)
}
export default Nav;