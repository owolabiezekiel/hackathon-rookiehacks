import React from 'react';
import './css/Navigation.css';

class Navigation extends React.Component{
    render() {
        return (
            <div>
              <ul className="nav">
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Signup">Sign Up</a></li>
		<li><a href="/Login">Login</a></li>
              </ul>
            </div>
        );
    }
}

export default Navigation;