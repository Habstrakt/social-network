import React from "react";
import styleNav from "../Nav.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {

		return (
				<div>
								<div className={styleNav.item}>
										<NavLink to='/profile' activeClassName={styleNav.activeLink}>Profile</NavLink>
								</div>
								<div className={styleNav.item}>
										<NavLink to='/dialogs' activeClassName={styleNav.activeLink}>Messages</NavLink>
								</div>
								<div className={styleNav.item}>
										<NavLink to='/news' activeClassName={styleNav.activeLink}>News</NavLink>
								</div>
								<div className={styleNav.item}>
										<NavLink to='/music' activeClassName={styleNav.activeLink}>Music</NavLink>
								</div>
								<div className={styleNav.item}>
										<NavLink to='/settings' activeClassName={styleNav.activeLink}>Settings</NavLink>
								</div>
				</div>
		)
}

export default NavItem;