import React from 'react'

const ListItemEdit = ({ data, modifyItem, removeItem }) => {


    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!event.target.name.value){
            // show error
            event.target.name.placeholder="Please enter a value";
            return;
        }
        modifyItem(data.id, 'state', 'saved');
        return;
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>
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

export default ListItemEdit;