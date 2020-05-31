import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";


function UserAccount(props){

	const redirectToHome = () => {
    		props.updateTitle('Home');
    		props.history.push('/Home');
	}


	return (
       	<div>
	<form>
          <h1>Your account</h1>
	   <p>Make changes to your profile here</p>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={redirectToHome()}
            >Logout</button>
            </form>
       	</div>
)
}

 
export default UserAccount;