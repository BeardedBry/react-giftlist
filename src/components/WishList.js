import React, {useContext} from 'react';
import ListItem from './ListItem';
import ListItemEdit from './ListItemEdit';
import UserContext from '../context/UserContext';


const WishList = () => {

    // List item for 'save' state
    const listItemJsx = (item) => {
        return (
        <li>
        <ListItem 
            key={item.id}
            data={item} 
            modifyItem={modifyListItem}
            removeItem={removeListItem}
        />
        </li>
        )
    };
    
    // list item for 'edit' state
    const listItemEditJsx = (item) => {
        return (
        <li>
        <ListItemEdit
            key={item.id}
            data={item} 
            modifyItem={modifyListItem}
            removeItem={removeListItem}
        />
        </li>
        )
    };

    const context = useContext(UserContext);
    const list = context.wishList;
    const setWishList = context.setWishList;

    const removeListItem = (id) => {
        const prevState = [...list];
        const newState = prevState.filter(obj => obj.id !== id);
        console.log(newState);
        setWishList(newState);
    }
    
    // Flexible function for modifying the wishlist state
    const modifyListItem = (id, property, value) => {
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
                        return (
                            item.state === 'edit' ? listItemEditJsx(item) : listItemJsx(item)
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default WishList;