import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';

const App = () => {
	return (
		<BrowserRouter>
			<div className='AppWrapper'>
				<Header />
				<Sidebar />

				{/* блок с основным содержимым (переключается за счет маршрутизации) */}
				{/* каждая компонента 'Route' анализирует URL, подставляя нужные компоненты */}
				<main className='Content'>
					<Route component={Profile} path='/profile' />
					<Route component={Messenger} path='/messenger' />
					<Route path='/newsfeed' />
					<Route path='/musiclist' />
					<Route path='/settings' />
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
