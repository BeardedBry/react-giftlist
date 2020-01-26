import React from 'react';

const ListItem = ({ data, modifyList }) => {
    //modifyList = (id, property, value)

    // show different if field is saved or being edited.
    if(data.state === 'saved'){
        return (
            <div className="WishList-ListItem">
                {data.name}
                {data.cost}
                {data.description}
                <button onClick={()=>modifyList(data.id, 'state', 'edit')}>
                    Edit
                </button>
                <button>Remove</button>
            </div>
        )
    } else if(data.state === 'edit') {
        return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                modifyList(data.id, 'state', 'saved');
            }}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name" // has to match state object id
                        value={data.name}
                        onChange={( {target} )=> {
                            modifyList(data.id, target.name, target.value);
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
                            modifyList(data.id, target.name, target.value);
                            }
                        } 
                    />
                </label>
                <input 
                    type="submit" 
                    value="Save"
                />
                <button>Remove</button>
            </form>
        )
    }
}

export default ListItem;