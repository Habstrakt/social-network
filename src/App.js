import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import './App.css';


import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import SidebarContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";


class App extends React.Component {
		componentDidMount() {
				this.props.initializeApp();
		}

		render() {
				if (!this.props.initialized) {
						return <Preloader/>
				}

				return (
								<div className='app-wrapper'>
										<HeaderContainer/>
										<SidebarContainer/>
										<div className='app-wrapper-content'>
												<Route path='/profile/:userId?'
															 render={() => <ProfileContainer/>}/>
												<Route path='/dialogs'
															 render={() => <DialogsContainer/>}/>
												<Route path='/users'
															 render={() => <UsersContainer/>}
												/>
												<Route path='/login'
															 render={() => <LoginPage/>}
												/>
												<Route path='/news' component={News}/>
												<Route path='/music' component={Music}/>
												<Route path='/settings' component={Settings}/>
										</div>
								</div>
				)
		}
}

const mapStateToProps = (state) => ({
		initialized: state.app.initialized
})

export default compose(
		withRouter,
		connect(mapStateToProps, {initializeApp})) (App);
