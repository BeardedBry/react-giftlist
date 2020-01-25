import React from 'react';

const ListItem = ({ data }) => {

    // show different if field is saved or being edited.
    if(data.state === 'saved'){
        return (
            <div className="WishList-ListItem">
                {data.name}
                {data.cost}
                {data.description}
                <button>Edit</button>
                <button>Remove</button>
            </div>
        )
    } else if(data.state === 'edit') {
        return (
            <form>
                <label>
                    Name:
                    <input value={data.name} />
                </label>
                <label>
                    Description:
                    <input value={data.description} />
                </label>
                <input type="submit" value="Save" />
                <button>Remove</button>
            </form>
        )
    }
}

export default ListItem;