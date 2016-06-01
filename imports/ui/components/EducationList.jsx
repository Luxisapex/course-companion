import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import UserEducation from './UserEducation.jsx';
import UserTechnical from './UserTechnical.jsx';
import UserMaster from './UserMaster.jsx';

export default class EducationList extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			search: '',
			subscription: {
				user: Meteor.subscribe('user')
			}
		};
	}

	education() {
		if(this.state.subscription.user.ready())
			return Meteor.users.findOne(Meteor.userId()).education || { name: '-' }
		return { name: '-' }
	}

	technical() {
		if(this.state.subscription.user.ready())
			return Meteor.users.findOne(Meteor.userId()).technical || { name: '-' }
		return { name: '-' }
	}

	master() {
		if(this.state.subscription.user.ready())
			return Meteor.users.findOne(Meteor.userId()).master || { name: '-' }
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