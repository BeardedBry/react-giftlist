import React from 'react';
import WishList from './WishList';

const MainContent = ({ wishlist, setWishList }) => {
    return (
        <main>
            <WishList 
                list={wishlist}
                setWishList={setWishList}
            />
        </main>
    );
}

export default MainContent;