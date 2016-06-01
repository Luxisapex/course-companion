import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import UserEducation from './UserEducation.jsx';
import UserTechnical from './UserTechnical.jsx';
import UserMaster from './UserMaster.jsx';

import { Educations } from '../../api/educations/educations.js';

export default class EducationList extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			search: '',
			subscription: {
				user: Meteor.subscribe('user'),
				educations: Meteor.subscribe('educations')
			}
		};
	}

	education() {
		if(this.state.subscription.user.ready())
			return Educations.findOne(Meteor.user().education) || { name: '-' }
		return { name: '-' }
	}

	technical() {
		if(this.state.subscription.user.ready())
			return Educations.findOne(Meteor.user().technical) || { name: '-' }
		return { name: '-' }
	}

	master() {
		if(this.state.subscription.user.ready())
			return Educations.findOne(Meteor.user().master) || { name: '-' }
		return { name: '-' }
	}

	render() {
		return(
			<div>
				<UserEducation education={this.education()} />
				<UserTechnical technical={this.technical()} />
				<UserMaster master={this.master()} />
			</div>
		);
	}
}