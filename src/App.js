import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import SidebarContainer from "./components/nav/NavContainer";
import UsersContainer from "./components/users/UsersContainer";



const App = (props) => {
		return (
				<Router>
						<div className='app-wrapper'>
								<Header/>
								<SidebarContainer />
								<div className='app-wrapper-content'>
										<Route path='/profile'
													 render= { () => <Profile /> }/>
										<Route path='/dialogs'
													 render= { () => <DialogsContainer/> }/>
										<Route path='/users'
													 render= { () => <UsersContainer/> }
										/>
										<Route path='/news' component={News}/>
										<Route path='/music' component={Music}/>
										<Route path='/settings' component={Settings}/>

								</div>
						</div>
				</Router>
		)
}


export default App;
