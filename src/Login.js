import React, { Component } from 'react';

import * as Backend from './utils/backend'

import { asyncComponent } from 'react-async-component';

var Link = require('react-router-dom').Link;

function listify(list) {
	const newList = list.map((item) =>
	    <li key={item}>{item}</li>
	);
	return (
	    <ul> {newList} </ul>
	)
}

var getUsers = () => {
	var promise = new Promise(function(resolve, reject) {
		Backend.getUsernameList(resolve, reject);
	})
	var handleError = (text, http) => {
		return "ERROR\nbody: " + text + "\nhttp: " + http
	}
	promise.then(listify, handleError)
	return promise
}

const AsyncProduct = asyncComponent({
    resolve: getUsers,
    LoadingComponent: ({ productId }) => <div>Loading {productId}</div>, // Optional
    ErrorComponent: ({ error }) => <div>{error.message}</div> // Optional
});

class Login extends Component {
    
    render() {
        return (
            <div class = "full">
                <h1>Getting something done..?</h1>
                <h2>Users:</h2>
                <AsyncProduct productId={1} />
            </div>
        )
    }
}

export default Login
