import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;

function listify(list) {
	const newList = list.map((item) =>
		<a key={item} href={"/pin?user=" + item}>
			<div className = "box font1">
				<li>{item}</li>
			</div>
		</a>
	);
	return <ul className = "center"> {newList} </ul>
}

const AsyncUserList = Async(<div>Loading user list</div>, listify, Backend.getUsernameList);

class Login extends Component {
    
    render() {
        return (
            <div className = "full">
                <h2>Select user:</h2>
                <AsyncUserList />
            </div>
        )
    }
}

export default Login
