import React, { Component } from 'react';

import * as Backend from './utils/backend'

var Link = require('react-router-dom').Link;

class EnterPIN extends Component {

    render() {
        return (
            <div className="center">
            	<h2>Enter pin</h2>
		        <table id="pinTable"><tbody>
		        	<tr>
		        		<KeypadDisplay/>
		        	</tr>
		        	<tr>
				    	<KeypadButton value="1"/>
				    	<KeypadButton value="2"/>
				    	<KeypadButton value="3"/>
		        	</tr>
		        	<tr>
				    	<KeypadButton value="4"/>
				    	<KeypadButton value="5"/>
				    	<KeypadButton value="6"/>
		        	</tr>
		        	<tr>
				    	<KeypadButton value="7"/>
				    	<KeypadButton value="8"/>
				    	<KeypadButton value="9"/>
		        	</tr>
		        	<tr>
				    	<KeypadButton value="<<" action={backward(this.props.history)}/>
				    	<KeypadButton value="0"/>
				    	<KeypadButton value="OK" action={verify(this.props.location.state.user, this.props.history)}/>
		        	</tr>
		        </tbody></table>
            </div>
        )
    }
}

function appendNumber(event) {
	const element = document.getElementById("pin")
	element.innerHTML += event.target.innerHTML;
}

function backward(history) {
	return (event) => {
		const element = document.getElementById("pin")
		if (element.innerHTML === '')
			history.push('/')
		else
			element.innerHTML = ''
	}
}


function verify(user, history) {
	const handleLoginResponse = (loginResponse) => {
		if (loginResponse.success) {
			sessionStorage.setItem('token', loginResponse.token)
			sessionStorage.setItem('ledgerId', loginResponse.ledgerId)
			sessionStorage.setItem('name', user)
			history.push('/home')
		} else {
			alert("You are fake news")
		}
	}
	return (event) => {
		const element = document.getElementById("pin")
		Backend.verifyLogin(
			{pin: element.innerHTML, userName: user},
			handleLoginResponse,
			alert
		)
	}
}

class KeypadDisplay extends Component {

    render() {
		return <td colSpan="3"><p>&nbsp;<span id="pin"></span></p></td>
	}
}

function KeypadButton(props) {
	return (
	    <td onClick={props.action ? props.action : appendNumber}>
	    	<div className="roundBox">{props.value}</div>
	    </td>
	)
}

export default EnterPIN

