import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;

function listify(list) {
	const newList = list.map((item) =>
	    <li key={item}>{item}</li>
	);
	return <ul> {newList} </ul>
}

const AsyncUsernameList = Async(<div>Loading user list</div>, listify, Backend.getUsernameList);

class Login extends Component {
    
    render() {
        return (
            <div className = "full">
                <h1>Getting something done..?</h1>
                <h2>Users:</h2>
                <AsyncUsernameList />
            </div>
        )
    }
}

export default Login
