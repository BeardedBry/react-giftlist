import React, { useState } from 'react';
import './App.css';
import './components/TopBar';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import info from './dummyData.json';


function App() {

  const userInfo = info;
 
  return (
    <div className="App">
      <TopBar user={userInfo}/>
      <SideBar user={userInfo}/>
      <MainContent user={userInfo}/>
    </div>
  );
}

export default App;
