import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';
import { Educations } from '../../api/educations/educations.js';

export default class EducationRequirements extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				user: Meteor.subscribe('user'),
				educations: Meteor.subscribe('educations')
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
				return Educations.findOne(Meteor.user().education).requirements-sum;
			}
		}
		return '-';
	}

	isEducation(course) {
		let courses = Educations.findOne(Meteor.user().education).courses;
		for(let i = 0; i < courses.length; i++) {
			if(courses[i].code === course.code) {
				return true;
			}
		}
	}

	courses() {
		let courses = [];
		if(this.state.subscription.user.ready()) {
			Meteor.user().courses.forEach((courseId) => {
				courses.push(Courses.findOne(courseId));
			});
			return courses;
		}
		return [];
	}

	render() {
		return(
			<li className="points"><b>Left to graduate {this.educationPoints()}</b></li>
		);
	}

}

