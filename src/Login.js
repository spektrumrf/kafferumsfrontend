import React, { Component } from 'react';

import getUsernameList from './utils/backend'

var Link = require('react-router-dom').Link;

const users = getUsernameList();
const listUsers = users.map((user) =>
  <li key={user}>{user}</li>
);

class Login extends Component {
    
    render() {
        return (
            <div>
                <h1>Getting something done..?</h1>
                <ul><h3>{listUsers}</h3></ul>
            </div>
        )
        
    }
    
}




export default Login
