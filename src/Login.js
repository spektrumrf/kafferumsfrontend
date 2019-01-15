import React, { Component } from 'react';

import Backend from './utils/backend'

import { asyncComponent } from 'react-async-component';

var Link = require('react-router-dom').Link;

var getUsers = ({ productId }) => {
    const users = Backend.getUsernameList();
    const listUsers = users.map((user) =>
        <li key={user}>{user}</li>
    );
    return (
        <ul> {listUsers} </ul>
    )
}

const AsyncProduct = asyncComponent({
    resolve: () => getUsers,
    LoadingComponent: ({ productId }) => <div>Loading {productId}</div>, // Optional
    ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
  });
   
  

class Login extends Component {
    
    render() {
        return (
            <div class = "full">
                <h1>Getting something done..?</h1>
                <h2>Users:</h2>
                <AsyncProduct productId={1} />
            </div>
        )
        
    }
    
}




export default Login
