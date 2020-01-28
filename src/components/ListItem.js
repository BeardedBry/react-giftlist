import React from 'react';

const ListItem = ({ data, modifyItem, removeItem }) => {
    //modifyItem = (id, property, value)
    //removeItem = (id)

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(data.state === 'edit') {
            if(!event.target.name.value){
                // show error
                event.target.name.placeholder="Please enter a value";
                return;
            }
            modifyItem(data.id, 'state', 'saved');
            return;
        }else if(data.state === 'saved') {
            modifyItem(data.id, 'state', 'edit')
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>
                {
                data.state === 'edit' ? (  <input
                    type="text"
                    name="name" // has to match state object id
                    value={data.name}
                    onChange={( {target} )=> {
                        modifyItem(data.id, target.name, target.value);
                        }
                    }
                />
                ):(
                    data.name
                )
                }
            </label>
            <label>
                {
                data.state === 'edit' ? (
                <input 
                    value={data.description}
                    name="description"
                    type="textarea"
                    onChange={( {target} )=> {
                        modifyItem(data.id, target.name, target.value);
                        }
                    } 
                />):(
                    data.description
                    )
                }
            </label>
            {
            data.state === 'edit' ? (
                <input 
                    type="submit" 
                    value="Save"
                />
            ):(
                <input 
                type="submit" 
                value="Edit"
            />
            ) 
            }
            <button onClick={()=>removeItem(data.id)}>
                Remove
            </button>
        </form>
        )
    }


export default ListItem;