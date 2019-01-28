import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;

function displayLedgerSelection(ledgers) {
	const newList = ledgers.map((ledger) =>
		<div key={ledger.id} className = "box font1">
			<li>{ledger.id}</li>
		</div>
	);
	return <ul className = "center"> {newList} </ul>
}

function displayLedger(ledgerData) {
	const newList = ledgerData.purchases.map((purchase) =>
		<div key={purchase.id} className = "box font1">
			<li>{purchase.timestamp} -- {purchase.total}</li>
		</div>
	);
	return <ul className = "center"> {newList} </ul>
}

function getLedgers(token) {
	return (success, handleError) => Backend.getLedgers(token, success, handleError)
}

function getLedger(ledgerId, token) {
	return (success, handleError) => Backend.getLedger(ledgerId, token, success, handleError)
}

var token;
var AsyncLedgerSelection;
var AsyncLedgerHistory;

class History extends Component {

	componentWillMount() {
    	token = sessionStorage.getItem('token');
		AsyncLedgerSelection = Async(<div>Loading ledger list</div>, displayLedgerSelection, getLedgers(token));
		AsyncLedgerHistory = () => (<div>Select ledger</div>)//Async(<div>Loading ledger</div>, displayLedger, getLedger(1, token));
	}

    render() {
        return (
            <div>
            	<AsyncLedgerSelection />
            	<AsyncLedgerHistory />
				<Link to={{
					pathname: "/home"
				}}>
					&lt;&lt; Back
				</Link>
            </div>
        )
    }
}

export default History

