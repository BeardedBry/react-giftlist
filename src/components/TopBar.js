import React,{ useContext } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import UserContext from "../context/UserContext";

const TopBar = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const context = useContext(UserContext);
    const user = context.userInfo;

    console.log(useAuth0);

    return (
        <div className="TopBar">
            {!isAuthenticated && (
                <>
                <p>test</p>
                <button onClick={() => loginWithRedirect({})}>Log in</button>
                </>
            )}

            {isAuthenticated && (
                <button onClick={() => logout()}>Log out</button>
            )}
        </div>
    );
}

export default TopBar;