import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';
import { Educations } from '../../api/educations/educations.js';

export default class TechnicalRequirements extends TrackerReact(React.Component) {
	
	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user'),
				educations: Meteor.subscribe('educations')
			}
		}
	}

	isTech(course) {
		let courses = Educations.findOne(Meteor.user().technical).courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i] === course._id) {
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
				return Educations.findOne(Meteor.user().technical).requirements-technicalSum;
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
			<li className="points"><b>Left to finish technical {this.technicalPoints()}</b></li>
		);
	}

}