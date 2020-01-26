import React from 'react';
import ListItem from './ListItem';

const WishList = ({ list, setWishList }) => {
    // Flexible function for modifying the wishlist state
    const modifyList = (id, property, value) => {
        const prevState = [...list];
        const listItem = prevState.filter(obj => obj.id === id );
        listItem[0][property] = value;
        setWishList(prevState);
    }

    const addToList = () => {
        const addition = {
            "name": "",
            "id": Date.now().toString(),
            "url": "",
            "description": "",
            "purchased": false,
            "dateAdded": Date.now(),
            "dateRemoved": null,
            "datePurchased": "",
            "cost": "",
            "state": "edit"
        };
        setWishList([addition, ...list]);
    }

    return (
        <div className="WishList">
            <div className="WishList-header">
                <p>Wish List: ({list.length}) items</p>
                <p>Approximate total cost: $$</p>
            </div>
            <div className="WishList-body">
                <button onClick={addToList} >+</button>
                <ul>
                    { list.map( (item) => {
                        return <li><ListItem data={item} modifyList={modifyList}/></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default WishList;