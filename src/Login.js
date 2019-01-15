import React, { Component } from 'react';

import * as Backend from './utils/backend'

import { asyncComponent } from 'react-async-component';

var Link = require('react-router-dom').Link;

var getUsers = ({ productId }) => {
    const users = Backend.getUsernameList();
    const listUsers = users.map((user) =>
    <div class = "box font1">
        <li key={user}>{user}</li>
    </div>
        
    );
    return (
        <ul class = "center"> {listUsers} </ul>
    )
}

const AsyncUserList = asyncComponent({
    resolve: () => getUsers,
    LoadingComponent: () => <div>Loading user ist</div>, // Optional
    ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
  });
   
  

class Login extends Component {
    
    render() {
        return (
            <div>
                <h1>Something got done..?</h1>
                <h2>Users:</h2>
                <a href="https://spektrum.fi/"><AsyncUserList user /></a>
            </div>
        )
        
    }
    
}




export default Login
