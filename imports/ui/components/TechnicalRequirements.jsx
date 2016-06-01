import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class TechnicalRequirements extends TrackerReact(React.Component) {
	
	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user')
			}
		}
	}

	isTech(course) {
		let courses = Meteor.user().technical.courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	// Returns the difference between required points for users technical and acquired points within the field
	technicalPoints() {
		if(this.state.subscription.user.ready()) {
			if(Meteor.user().technical) {
				let technicalCourses = this.courses().filter(this.isTech);
				let technicalSum = 0;
				for(let i = 0; i < technicalCourses.length; i++) {
					technicalSum += technicalCourses[i].points;
				}
				return Meteor.user().technical.requirements-technicalSum;
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
			<li className="points"><b>Left to finish technical {this.technicalPoints()}</b></li>
		);
	}

}