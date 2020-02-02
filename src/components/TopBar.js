import React,{ useContext } from 'react';
import UserContext from '../context/UserContext';

const TopBar = () => {

    const context = useContext(UserContext);
    const user = context.userInfo;

    return (
        <div className="TopBar">
            <h3>Welcome {user}!!</h3>
        </div>
    )
}

export default TopBar;