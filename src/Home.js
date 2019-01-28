import React, { Component } from 'react';

import * as Backend from './utils/backend'
import UserContext from './contexts/user'

var Link = require('react-router-dom').Link;

class Home extends Component {

    render() {
   		let user = this.context;
        return (
            <div>
            	<h2>Welcome back {user.name} {user.language}</h2>
            	<div onClick={test}>
            		<p>Purchase Snickers&copy;</p>
            	</div>
            	<div onClick={logout}>
            		<p>Log out</p>
            	</div>
            </div>
        )
    }
}
UserContext.contextType = UserContext;

const token = '';

function test() {
	Backend.purchase(1, [{itemId: 1, amount: 2}], token, alert, alert);
}

function logout() {
	Backend.logout(token, alert, alert);
}

export default Home

