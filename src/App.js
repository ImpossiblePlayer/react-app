import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

// Компоненты основного блока
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Messenger from './components/Messenger/Messenger';
import NewsFeed from './components/NewsFeed/NewsFeed';
import MusicList from './components/MusicList/MusicList';
import Settings from './components/Settings/Settings';

const App = () => {
	return (
		<BrowserRouter>
			<div className='AppWrapper'>
				<Header />
				<SideBar />
				{/* блок с основным содержимым (переключается за счет маршрутизации) */}
				{/* каждая компонента 'Route' анализирует URL, подставляя нужные компоненты */}
				<main className='Content'>
					<Route exact path='/' component={Profile} />
					<Route path='/profile' component={Profile} />
					<Route path='/messenger' component={Messenger} />
					<Route path='/newsfeed' component={NewsFeed} />
					<Route path='/music' component={MusicList} />
					<Route path='/settings' component={Settings} />
				</main>
			</div>
		</BrowserRouter>
	);
};

export default App;
