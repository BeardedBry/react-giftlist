import React from 'react';
import WishList from './WishList';

const MainContent = ({ user }) => {
    return (
        <main>
            <WishList user={user}/>
        </main>
    );
}

export default MainContent;