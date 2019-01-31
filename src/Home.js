import React, { Component } from 'react';

import * as Backend from './utils/backend'
import UserContext from './contexts/user'

var Link = require('react-router-dom').Link;

class Home extends Component {

    render() {
   		let user = this.context;
        return (
            <div id="home">
            	<h2>Welcome back {sessionStorage.getItem('name')}!</h2>
            	<div className="roundBox font1" onClick={test}>
            		Purchase Snickers&copy;
            	</div>
            	<div className="roundBox font1" onClick={testCredit}>
            		Purchase 2e credit
            	</div>
            	<div className="roundBox font1" onClick={logout(this.props.history)}>
            		Log out
            	</div>
            	<div className="roundBox font1">
					<Link to={{
						pathname: "/history"
					}}>
						Check your ledger
					</Link>
            	</div>
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

