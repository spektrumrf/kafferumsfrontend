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
            	<div onClick={logout(this.props.history)}>
            		<p>Log out</p>
            	</div>
            </div>
        )
    }
}
UserContext.contextType = UserContext;

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcmttdXMiLCJpc3MiOiJhdXRoMCIsImV4cCI6MTU0ODY5MDY1MCwiaWF0IjoxNTQ4NjkwMzUwfQ.WXXIsxxoyRhRNk7OuqXXxTlY91Sk-yxBmOyOm41yTdk';

function test() {
	Backend.purchase(1, [{itemId: 1, amount: 2}], token, alert, alert);
}

function logout(history) {
	return () => {
		Backend.logout(token, console.log, console.log);
		history.push("/");
	}
}

export default Home

