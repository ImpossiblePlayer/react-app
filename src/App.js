import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
// import Profile from './Profile';

const App = () => {
  return (
    <div className='App-wrapper'>
      {/* <Profile /> */}
      <Header />
      <Sidebar />
      <main className='Content'>
        Основной контент
      </main>
    </div>
  );
}

export default App;
