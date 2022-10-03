import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

// Компоненты основного блока
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Profile } from './components/Profile';
import { Messenger } from './components/Messenger';
import { NewsFeed } from './components/NewsFeed';
import { MusicList } from './components/MusicList';
import { Settings } from './components/Settings';

const App = ({ state, funcs }) => {
	return (
		<div className='AppWrapper'>
			<Header funcs={funcs} />
			<SideBar />
			{/* блок с основным содержимым (переключается за счет маршрутизации) */}
			{/* каждая компонента 'Route' анализирует URL, подставляя нужные компоненты */}
			<main className='Content'>
				<Route
					exact
					path='/'
					render={() => <Profile state={state.profileData} funcs={funcs} />}
				/>
				<Route
					exact
					path='/profile'
					render={() => <Profile state={state.profileData} funcs={funcs} />}
				/>
				<Route
					exact
					path='/messenger'
					render={() => <Messenger state={state.messengerData} funcs={funcs} />}
				/>
				<Route exact path='/newsfeed' render={() => <NewsFeed />} />
				<Route exact path='/music' render={() => <MusicList />} />
				<Route exact path='/settings' render={() => <Settings />} />
			</main>
		</div>
	);
};

// сделать переменные с параметрами

export default App;
