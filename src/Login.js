import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;

function listify(list) {
	const newList = list.map((item) =>
		<Link key={item} to={{
			pathname: "/pin",
			state: { user: item }
		}}>
			<div className = "roundBox font1">
				<li>{item}</li>
			</div>
		</Link>
	);
	return <ul id="userList" className="center"> {newList} </ul>
}

function AddUserBox(props) {
	return (
		<Link id="addUser" to={{
			pathname: "/newUser"
		}}>
			<div className = "roundBox font1">
				+
			</div>
		</Link>
	);
}

const AsyncUserList = Async(<div>Loading user list</div>, listify, Backend.getUsernameList);

class Login extends Component {
    
    render() {
        return (
            <div className="full">
            	<AddUserBox />
                <AsyncUserList />
            </div>
        )
    }
}

export default Login
