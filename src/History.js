import React, { Component } from 'react';

import * as Backend from './utils/backend'
import Async from './utils/async'

var Link = require('react-router-dom').Link;
var queryString = require('query-string');

function displayLedgerSelection(ledgers) {
	const newList = ledgers.map((ledger) =>
		<div key={ledger.id} className = "roundBox font1">
			<li><Link to={{pathname: "/history", search: "?id=" + ledger.id}}>{ledger.id}</Link></li>
		</div>
	);
	return <ul className = "center"> {newList} </ul>
}

function displayLedger(ledgerData) {
	const newList = ledgerData.rows.map((row) =>
		<tr key={row} className = "font1">
			<td><div className="roundBox">{row.first}</div></td>
			<td><div className="roundBox">{(row.second/100.0).toFixed(2)}</div></td>
		</tr>
	);
	return <table id="ledgerPurchases"><tbody> {newList} </tbody></table>
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
		
		var ledgerId = queryString.parse(this.props.location.search).id
		if (ledgerId)
			AsyncLedgerHistory = Async(<div>Loading ledger</div>, displayLedger, getLedger(ledgerId, token));
		else
			AsyncLedgerHistory = () => (<div>Select ledger</div>)
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

