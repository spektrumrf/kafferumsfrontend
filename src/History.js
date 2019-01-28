import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

function displayLedger(ledgerData) {
	const newList = ledgerData.purchases.map((purchase) =>
		<div key={purchase.id} className = "box font1">
			<li>{purchase.timestamp} -- {purchase.total}</li>
		</div>
	);
	return <ul className = "center"> {newList} </ul>
}

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhcmttdXMiLCJpc3MiOiJhdXRoMCIsImV4cCI6MTU0ODY5MDY1MCwiaWF0IjoxNTQ4NjkwMzUwfQ.WXXIsxxoyRhRNk7OuqXXxTlY91Sk-yxBmOyOm41yTdk'

const AsyncLedgerHistory = Async(<div>Loading ledger</div>, displayLedger, (success, handleError) => Backend.getLedger(1, token, success, handleError));

class History extends Component {

    render() {
        return (
            <div>
            	<AsyncLedgerHistory />
            </div>
        )
    }
}

export default History

