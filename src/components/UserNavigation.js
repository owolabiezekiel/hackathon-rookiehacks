import React from 'react';
import './css/Navigation.css';

class UserNavigation extends React.Component{
    render() {
        return (
            <div>
              <ul className="nav">
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Blog">Blog</a></li>
		<li><a href="/userForum">Community</a></li>
                <li><a href="/userAccount">Account</a></li>
              </ul>
            </div>
        );
    }
}

export default UserNavigation;