import React, { Suspense } from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import './App.css';

import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

import SidebarContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/users/UsersContainer";

import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import {BrowserRouter} from 'react-router-dom';

//import DialogsContainer from "./components/dialogs/DialogsContainer";
//import ProfileContainer from "./components/profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));


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
												<Suspense fallback={<Preloader/>}>
												<Route path='/profile/:userId?'
															 render={() => <ProfileContainer/>}/>
												<Route path='/dialogs'
															 render={() => <DialogsContainer />}/>
												<Route path='/users'
															 render={() => <UsersContainer/>}
												/>
												<Route path='/login'
															 render={() => <LoginPage/>}
												/>
												<Route path='/news' component={News}/>
												<Route path='/music' component={Music}/>
												<Route path='/settings' component={Settings}/>
												</Suspense>
										</div>
								</div>
				)
		}
}

const mapStateToProps = (state) => ({
		initialized: state.app.initialized
})

const AppContainer = compose(
		withRouter,
		connect(mapStateToProps, {initializeApp})) (App);

const MainApp = (props) => {
		return (
				<React.StrictMode>
						<BrowserRouter>
								<Provider store={store}>
										<AppContainer />
								</Provider>
						</BrowserRouter>
				</React.StrictMode>
		)
}

export default  MainApp