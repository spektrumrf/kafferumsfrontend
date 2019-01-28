import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;

function displayLedger(ledgerData) {
	const newList = ledgerData.purchases.map((purchase) =>
		<div key={purchase.id} className = "box font1">
			<li>{purchase.timestamp} -- {purchase.total}</li>
		</div>
	);
	return <ul className = "center"> {newList} </ul>
}

function getLedger(success, handleError) {
	return Backend.getLedger(1, sessionStorage.getItem('token'), success, handleError)
}

const AsyncLedgerHistory = Async(<div>Loading ledger</div>, displayLedger, getLedger);

class History extends Component {

    render() {
        return (
            <div>
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

