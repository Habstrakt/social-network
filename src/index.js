import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';


// import {addPost, updateNewMessageText, updateNewPostText} from './redux/state';
// import {addMessageText} from "./redux/state";



let rerenderEntireThree = (state) => {
		ReactDOM.render(
				<React.StrictMode>
						<App state={state} store={store} dispatch={store.dispatch.bind(store)}
						/>
				</React.StrictMode>,
				document.getElementById('root')
		);
};


rerenderEntireThree(store.getState())

store.subscribe( () => {
		let state = store.getState();
		rerenderEntireThree(state);
});