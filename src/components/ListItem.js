import React from 'react';

const ListItem = ({ data, modifyItem, removeItem }) => {
    //modifyItem = (id, property, value)
    //removeItem = (id)

    // TODO: refactor so both states aren't seperate return statements.
    // show different if field is saved or being edited.
    if(data.state === 'saved'){ // SAVED state
        return (
            <div className="WishList-ListItem">
                {data.name}
                {data.cost}
                {data.description}
                <button onClick={()=>modifyItem(data.id, 'state', 'edit')}>
                    Edit
                </button>
                <button onClick={()=>removeItem(data.id)}>Remove</button>
            </div>
        )
    } else if(data.state === 'edit') { // EDIT state
        return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(!e.target.name.value){
                    // show error
                    e.target.name.placeholder="Please enter a value";
                    return;
                }
                modifyItem(data.id, 'state', 'saved');
            }}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name" // has to match state object id
                        value={data.name}
                        onChange={( {target} )=> {
                            modifyItem(data.id, target.name, target.value);
                            }
                        }
                    />
                </label>
                <label>
                    Description:
                    <input 
                        value={data.description}
                        name="description"
                        type="textarea"
                        onChange={( {target} )=> {
                            modifyItem(data.id, target.name, target.value);
                            }
                        } 
                    />
                </label>
                <input 
                    type="submit" 
                    value="Save"
                />
                <button onClick={()=>removeItem(data.id)}>
                    Remove
                </button>
            </form>
        )
    }
}

export default ListItem;