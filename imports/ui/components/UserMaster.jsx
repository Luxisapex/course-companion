import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React, { Component } from 'react';
import { removeMaster } from '../../api/users/methods.js';

export default class UserMaster extends Component {

	removeMaster() {
		removeMaster.call({
			userId: Meteor.userId()
		});
	}

	render() {
		return(
			<li className="pure-g">
				<span className="pure-u-1-4">Master: </span>
				<span className="pure-u-1-2">
					{this.props.master.name}
				</span>
				<a className="pure-u-1-24" href="" onClick={this.removeMaster.bind(this)}>
					<i className="fa fa-minus" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}