import React from 'react';
import ListItem from './ListItem';

const WishList = ({ user }) => {
    return (
        <div className="WishList">
            <div className="WishList-header">
                <p>Wish List: ({user.wishlist.length}) items</p>
                <p>Approximate total cost: $$</p>
            </div>
            <div className="WishList-body">
                <button>+</button>
                <ul>
                    { user.wishlist.map( (item) => {
                        return <li><ListItem data={item} /></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default WishList;