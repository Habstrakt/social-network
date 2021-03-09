import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import Users from "./components/users/Users";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import SidebarContainer from "./components/nav/NavContainer";



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
													 render= { () => <Users/> }
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
