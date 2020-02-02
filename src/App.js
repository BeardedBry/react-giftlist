import React, { useState } from 'react';
import './App.css';
import './components/TopBar';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';


function App() {

  // const modifyList= (id, property, value) => {
  //   const prevState = {...wishList};
  //   const listItem = prevState.filter(obj => obj.id === id );
  //   listItem[property] = value;
  //   console.dir(prevState);
  // }
  return (
    <div className="App">
      <TopBar />
      {/* <SideBar user={userInfo}/> */}
      <MainContent />
    </div>
  );
}



export default App;
