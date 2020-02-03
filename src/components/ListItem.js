import React from 'react';

const ListItem = ({ data, modifyItem, removeItem }) => {
    //modifyItem = (id, property, value)
    //removeItem = (id)

    const onFormSubmit = (event) => {
        event.preventDefault();
        modifyItem(data.id, 'state', 'edit')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                   { data.name }
            </label>
            <label>
                { data.description }
            </label>
                <input 
                    type="submit" 
                    value="Edit"
                />
            <button onClick={()=>removeItem(data.id)}>
                Remove
            </button>
        </form>
        )
    }


export default ListItem;