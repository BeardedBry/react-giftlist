import React from 'react';

const TopBar = ({ user }) => {
    return (
        <div>
            <h3>Welcome {user.name}</h3>
        </div>
    )
}

export default TopBar;