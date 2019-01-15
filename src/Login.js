import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;

function listify(list) {
	const newList = list.map((item) =>
		<div key={item} className = "box font1">
			<li>{item}</li>
		</div>
	);
	return <ul className = "center"> {newList} </ul>
}

const AsyncUserList = Async(<div>Loading user list</div>, listify, Backend.getUsernameList);

class Login extends Component {
    
    render() {
        return (
            <div className = "full">
                <h2>Select user:</h2>
                <a href="https://spektrum.fi/">
                	<AsyncUserList />
                </a>
            </div>
        )
    }
}

export default Login
