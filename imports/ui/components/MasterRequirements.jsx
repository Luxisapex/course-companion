import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';
import { Educations } from '../../api/educations/educations.js';

export default class MasterRequirements extends TrackerReact(React.Component) {
	
	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user'),
				educations: Meteor.subscribe('educations')
			}
		}
	}

	isMaster(course) {
		let courses = Educations.findOne(Meteor.user().master).courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i] === course._id) {
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
				return Educations.findOne(Meteor.user().master).requirements-masterSum;
			}
		}
		return '-';
	}

	courses() {
		let courses = [];
		if(this.state.subscription.user.ready()) {
			Meteor.user().courses.forEach((courseId) => {
				courses.push(Courses.findOne(courseId));
			})
		}
		return courses;
	}

	render() {
		return(
			<li className="points"><b>Left to finish master {this.masterPoints()}</b></li>
		);
	}

	
}