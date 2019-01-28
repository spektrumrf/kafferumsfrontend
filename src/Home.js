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
				<Link to={{
					pathname: "/history"
				}}>
					Check your ledger
				</Link>
            </div>
        )
    }
}
UserContext.contextType = UserContext;

function test() {
	Backend.purchase(1, [{itemId: 1, amount: 2}], sessionStorage.getItem('token'), alert, alert);
}

function logout(history) {
	return () => {
		Backend.logout(sessionStorage.getItem('token'), console.log, console.log);
		sessionStorage.removeItem('token')
		history.push("/");
	}
}

export default Home

