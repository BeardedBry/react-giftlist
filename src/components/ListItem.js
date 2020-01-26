import React from 'react';

const ListItem = ({ data, modifyList }) => {

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
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={( {target} )=> {
                            // console.log(data.id);
                            // console.log(target.name)
                            // console.log(target.value);
                            modifyList(data.id, target.name, target.value);
                        }
                        }
                    />
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