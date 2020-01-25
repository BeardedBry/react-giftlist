import React from 'react';

const ListItem = ({ data }) => {
    return (
        <div className="WishList-ListItem">
            {data.name}
            {data.cost}
            {data.description}
        </div>
    );
}

export default ListItem;