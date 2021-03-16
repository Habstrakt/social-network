import React from 'react';
import styleHeader from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
		return (
				<header className={styleHeader.header}>
						<img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>

						<div className={styleHeader.loginBlock}>
								{ props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }

						</div>
				</header>
		)
}

export default Header;