import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class MasterRequirements extends TrackerReact(React.Component) {
	
	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user')
			}
		}
	}

	isMaster(course) {
		let courses = Meteor.user().master.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	// Returns the difference between required points for users master and acquired points within the field
	masterPoints() {
		if(this.state.subscription.user.ready()) {
			if(Meteor.user().master) {
				let masterCourses = this.courses().filter(this.isMaster);
				let masterSum = 0;
				for(let i = 0; i < masterCourses.length; i++) {
					masterSum += masterCourses[i].points;
				}
				return Meteor.user().master.requirements-masterSum;
			}
		}
		return '-';
	}

	courses() {
		if(this.state.subscription.user.ready()) {
			return Meteor.user().courses;
		}
		return [];
	}

	render() {
		return(
			<li className="points"><b>Left to finish master {this.masterPoints()}</b></li>
		);
	}

	
}