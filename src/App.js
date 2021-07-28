import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";

const App = () => {
	return (
		<div className={styles.AppWrapper}>
			<Header />
			<Sidebar />
			<Profile />
		</div>
	);
};

export default App;
