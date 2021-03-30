import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
		<React.StrictMode>
				<Router>
				<Provider store={store}>
						<App />
				</Provider>
				</Router>
		</React.StrictMode>,
		document.getElementById('root')
);




