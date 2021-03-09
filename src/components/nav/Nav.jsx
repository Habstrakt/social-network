import React from 'react';
import NavItem from "./NavItem/NavItem";
import NavFriend from "./NavFriend/NavFriend";
import styleNav from "./Nav.module.css";

const Nav = (props) => {
		let state = props.sidebar;

		 let friendsElement = state.friends.map(friend => <NavFriend name={friend.name} key={friend.id} />);
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