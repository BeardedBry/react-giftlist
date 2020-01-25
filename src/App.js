import React, { useState } from 'react';
import './App.css';
import './components/TopBar';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';


function App() {

  const userInfo = {
    name: "Brian",
    wishlist: [{
      name: 'baseball',
      id: '',
      url: '',
      description: '',
      purchased: false,
      dateAdded: '',
      dateRemoved: null,
      datePurchased: '',
      cost: ''
    },
    {
      name: 'car',
      id: '',
      url: '',
      description: '',
      purchased: false,
      dateAdded: '',
      dateRemoved: null,
      datePurchased: '',
      cost: ''
    },
    {
      name: 'coffee',
      id: '',
      url: '',
      description: '',
      purchased: false,
      dateAdded: '',
      dateRemoved: null,
      datePurchased: '',
      cost: ''
    }],
  };
 
  return (
    <div className="App">
      <TopBar user={userInfo}/>
      <MainContent user={userInfo}/>
    </div>
  );
}

export default App;
