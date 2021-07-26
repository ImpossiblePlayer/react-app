import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="App-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
};

export default App;
