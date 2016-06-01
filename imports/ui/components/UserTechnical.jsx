import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React, { Component } from 'react';
import { removeTechnical } from '../../api/users/methods.js';

export default class UserTechnical extends Component {

	removeTechnical() {
		removeTechnical.call({
			userId: Meteor.userId()
		});
	}

	render() {
		return(
			<li className="pure-g">
				<span className="pure-u-1-4">Technical: </span>
				<span className="pure-u-1-2">
					{this.props.technical.name}
				</span>
				<a className="pure-u-1-24" href="" onClick={this.removeTechnical.bind(this)}>
					<i className="fa fa-minus" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}