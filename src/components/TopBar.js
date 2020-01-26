import React from 'react';

const TopBar = ({ user }) => {
    return (
        <div className="TopBar">
            <h3>Welcome {user}!!</h3>
        </div>
    )
}

export default TopBar;