import React, { Component } from 'react';

import * as Backend from './utils/backend'

var Link = require('react-router-dom').Link;

class EnterPIN extends Component {

    render() {
        return (
            <div>
            	<h2>Enter pin</h2>
		        <div>
		        	<KeypadDisplay/>
		        	<div>
				    	<KeypadButton value="1"/>
				    	<KeypadButton value="2"/>
				    	<KeypadButton value="3"/>
		        	</div>
		        	<div>
				    	<KeypadButton value="4"/>
				    	<KeypadButton value="5"/>
				    	<KeypadButton value="6"/>
		        	</div>
		        	<div>
				    	<KeypadButton value="7"/>
				    	<KeypadButton value="8"/>
				    	<KeypadButton value="9"/>
		        	</div>
		        	<div>
				    	<KeypadButton value="<<" action={alert}/>
				    	<KeypadButton value="0"/>
				    	<KeypadButton value="OK" action={verify(this.props.location.state.user, this.props.history)}/>
		        	</div>
		        </div>
            </div>
        )
    }
}

function appendNumber(event) {
	const element = document.getElementById("pin")
	element.innerHTML += event.target.innerHTML;
}

function verify(user, history) {
	return (event) => {
		const element = document.getElementById("pin")
		Backend.verifyLogin(
			{pin: element.innerHTML, userName: user},
			(verified) => verified ? history.push('/home') : alert("WRONG"),
			alert
		)
	}
}

class KeypadDisplay extends Component {

    render() {
		return <div style={{textAlign: "center"}}><p>&nbsp;<span id="pin"></span></p></div>
	}
}

function KeypadButton(props) {
	return (
	    <div style={{float: "left", width: "33.3%", textAlign: "center", height: "128px"}} onClick={props.action ? props.action : appendNumber}>
	    	{props.value}
	    </div>
	)
}

export default EnterPIN

