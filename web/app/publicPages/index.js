import 'intersection-observer';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from '../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// LEAVE HERE FOR CLI: Page Routes Function
import { declarePublicRoutes } from './routes';

import './styles';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';


const dest = document.getElementById('public-app');
const store = createStore(window.STORE);

const component = (
	<BrowserRouter>
		{renderRoutes(declarePublicRoutes(true))}
	</BrowserRouter>
);

const application = (
	<Provider store={store}>
		{component}
	</Provider>
);

ReactDOM.render(application, dest);

if (process.env.NODE_ENV !== 'production') {
	window.React = React; // enable debugger
}

/* eslint-disable */
if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept([
		'./routes',
		'../redux/store',
	], () => {
		const newStore = require('../redux/store')(window.STORE);
		const newRoutes = require('./routes').declarePublicRoutes;

		const newComponent = (
			<BrowserRouter>
				{renderRoutes(newRoutes(true))}
			</BrowserRouter>
		);

		const newApplication = (
			<Provider store={newStore}>
				{newComponent}
			</Provider>
		);
		ReactDOM.render(newApplication, dest);
	});
}
