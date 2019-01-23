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
            </div>
        )
    }
}
UserContext.contextType = UserContext;


export default Home

