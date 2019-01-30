import React, { Component } from 'react';

import * as Backend from './utils/backend'
import UserContext from './contexts/user'

var Link = require('react-router-dom').Link;

class Home extends Component {

    render() {
   		let user = this.context;
        return (
            <div>
            	<h2>Welcome back {sessionStorage.getItem('name')}!</h2>
            	<button onClick={test}>
            		<p>Purchase Snickers&copy;</p>
            	</button>
            	<button onClick={testCredit}>
            		<p>Purchase 2e credit</p>
            	</button>
            	<button onClick={logout(this.props.history)}>
            		<p>Log out</p>
            	</button>
            	<button>
					<Link to={{
						pathname: "/history"
					}}>
						<p>Check your ledger</p>
					</Link>
            	</button>
            </div>
        )
    }
}
Home.contextType = UserContext; //TODO

function alertIfNotSuccess(text) {
	if (text !== "SUCCESS")
		alert(text);
}

function test() {
	Backend.purchase(sessionStorage.getItem('ledgerId'), [{itemId: 1, amount: 1}], sessionStorage.getItem('token'), alertIfNotSuccess, alert);
}

function testCredit() {
	Backend.purchase(sessionStorage.getItem('ledgerId'), [{itemId: 3, amount: 200}], sessionStorage.getItem('token'), alertIfNotSuccess, alert);
}

function logout(history) {
	return () => {
		sessionStorage.clear()
		history.push("/")
	}
}

export default Home

