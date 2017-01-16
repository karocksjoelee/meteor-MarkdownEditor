import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'; // An actual Component

import Accounts from './accounts';

class Header extends Component {

    onBinClick(event) {
        // Keeps broweser from navigate,when user clicks the link
        event.preventDefault();
        Meteor.call('bins.insert', (error, binId) => {
            //console.log(bin);
            browserHistory.push(`/bins/${binId}`);
        });
    }

    render(){
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div>
                <ul className=" nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;