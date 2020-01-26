import React, { useState } from 'react';
import './App.css';
import './components/TopBar';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import info from './dummyData.json';


function App() {

  const [userInfo, setUserInfo] = useState(info.name);
  const [wishList, setWishList] = useState(info.wishlist);

  
  // const modifyList= (id, property, value) => {
  //   const prevState = {...wishList};
  //   const listItem = prevState.filter(obj => obj.id === id );
  //   listItem[property] = value;
  //   console.dir(prevState);
  // }
  return (
    <div className="App">
      <TopBar user={userInfo}/>
      {/* <SideBar user={userInfo}/> */}
      <MainContent 
        wishlist={wishList} 
        setWishList={setWishList} 
      />
    </div>
  );
}



export default App;
