import React,{ useState, createContext } from 'react';
import info from '../dummyData.json';

const UserContext = createContext({});

export const UserProvider = ({ children }) =>{
  const [userInfo, setUserInfo] = useState(info.name);
  const [wishList, setWishList] = useState(info.wishlist);

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
