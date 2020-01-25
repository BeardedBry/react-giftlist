import React, { useState } from 'react';
import './App.css';
import './components/TopBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';


function App() {

  const userInfo = {
    name: "Brian",
  };
 
  return (
    <div className="App">
      <TopBar user={userInfo}/>
      <MainContent />
    </div>
  );
}

export default App;
