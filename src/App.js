import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Nav from "./components/nav/Nav";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";



const App = (props) => {
		return (
				<Router>
						<div className='app-wrapper'>
								<Header/>
								<Nav store={props.store}/>
								<div className='app-wrapper-content'>
										<Route path='/profile'
													 render= { () => <Profile store={props.store}/> }
										/>
										<Route path='/dialogs'
													 render= { () => <DialogsContainer store={props.store}/> }
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
