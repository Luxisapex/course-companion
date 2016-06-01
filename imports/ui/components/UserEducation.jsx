import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React, { Component } from 'react';
import { removeEducation } from '../../api/users/methods.js';

export default class UserEducation extends Component {

	removeEducation() {
		removeEducation.call({
			userId: Meteor.userId()
		});
	}

	render() {
		return(
			<li className="pure-g">
				<span className="pure-u-1-4">Education: </span>
				<span className="pure-u-1-2">
					{this.props.education.name}
				</span>
				<a className="pure-u-1-24" href="" onClick={this.removeEducation.bind(this)}>
					<i className="fa fa-minus" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}