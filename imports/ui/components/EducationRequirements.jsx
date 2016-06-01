import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class EducationRequirements extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user')
			}
		}
	}

	educationPoints() {
		if(this.state.subscription.user.ready()) {
			if(Meteor.user().education) {
				let baseCourses = this.courses().filter(this.isEducation);
				let sum = 0;
				for(let i = 0; i < baseCourses.length; i++) {
					sum += baseCourses[i].points;
				}
				return Meteor.user().education.requirements-sum;
			}
		}
		return 0;
	}

	isEducation(course) {
		let courses = Meteor.user().education.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	courses() {
		if(this.state.subscription.user.ready()) {
			return Meteor.user().courses;
		}
		return [];
	}

	render() {
		return(
			<li className="points"><b>Left to graduate {this.educationPoints()}</b></li>
		);
	}

}

