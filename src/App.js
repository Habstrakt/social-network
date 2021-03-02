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
								<Nav sidebar={props.state.sidebar}/>
								<div className='app-wrapper-content'>
										<Route path='/profile'
													 render= { () => <Profile
															 store={props.store}
															 //profilePage={props.state.profilePage}
															 // dispatch={props.dispatch}
													 />
													 }
										/>
										<Route path='/dialogs'
													 render= { () => <DialogsContainer
															 store={props.store}
															 // dispatch={props.dispatch}
															 // dialogsPage={props.state.dialogsPage}
													 /> }
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
