import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';

import React, { Component } from 'react';
import { addEducation, addTechnical, addMaster } from '../../api/users/methods.js';

export default class Education extends Component {

	addEducation() {
		let user = Meteor.user();
		if(user.master) {
			
		} else if (user.technical) {
			addMaster.call({
				userId: Meteor.userId(),
				master: this.props.education.name
			});
		} else if (user.education) {
			addTechnical.call({
				userId: Meteor.userId(),
				technical: this.props.education.name
			});
		} else {
			addEducation.call({
				userId: Meteor.userId(),
				education: this.props.education.name
			});
		}
		this.props.removeText();
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