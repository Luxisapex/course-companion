import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React, { Component } from 'react';

export default class Education extends Component {

	addEducation() {
		console.log('an education would have been added..');
		// addEducation.call({
		// 	userId: Meteor.user(),
		// 	educationId: this.props.key
		// });
	}

	render() {
		return (
			<li className="pure-g">
				<a className="pure-u-1-2" href="/main">
					{this.props.education.name}
				</a>
				<a className="pure-u-1-24" href="" onClick={this.addEducation.bind(this)}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}