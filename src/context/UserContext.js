import React,{ useState, createContext, useEffect } from 'react';
import axios from 'axios';
import info from '../dummyData.json';

const UserContext = createContext({});

export const UserProvider = ({ children }) =>{
  
  const [userInfo, setUserInfo] = useState('Brian');
  const [wishList, setWishList] = useState([]);


  useEffect(()=>{
      (async function (){
        const response = await axios.get('http://192.168.1.7:8000/giftable/get-list');
        console.log(response);
        //const parsed = await JSON.parse(response.data);
        await setWishList(response.data.wishlist);
        console.log(wishList);
      })()
  },[])


    return (
        <UserContext.Provider value={{
            wishList: wishList,
            setWishList: setWishList,
            userInfo: userInfo
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserContext;
