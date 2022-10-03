import React from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './App.module.css';

// Компоненты основного блока
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Profile } from './components/Profile';
import { Messenger } from './components/Messenger';
import { NewsFeed } from './components/NewsFeed';
import { MusicList } from './components/MusicList';
import { Settings } from './components/Settings';

const App = ({ state, funcs }) => {
	console.log(state);
	return (
		<div className={styles.AppWrapper}>
			<Header funcs={funcs} />
			<SideBar />
			{/* блок с основным содержимым (переключается за счет маршрутизации) */}
			{/* каждая компонента 'Route' анализирует URL, подставляя нужные компоненты */}
			<Routes className={styles.Content}>
				<Route
					path='/'
					element={<Profile state={state.profileData} funcs={funcs} />}
				/>
				<Route
					path='/profile'
					element={<Profile state={state.profileData} funcs={funcs} />}
				/>
				<Route
					path='/messenger'
					element={<Messenger state={state.messengerData} funcs={funcs} />}
				/>
				<Route path='/newsfeed' element={<NewsFeed />} />
				<Route path='/music' element={<MusicList />} />
				<Route path='/settings' element={<Settings />} />
			</Routes>
		</div>
	);
};

// сделать переменные с параметрами

export default App;
