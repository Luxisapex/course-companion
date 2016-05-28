// Lists courses associated with a student

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';
import { Courses } from '../../api/courses/courses.js';

import Course from './Course.jsx';

export default class CourseList extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				educations: Meteor.subscribe('educations'),
				courses: Meteor.subscribe('courses'),
				user: Meteor.subscribe('user')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.educations.stop();
	    this.state.subscription.courses.stop();
	    this.state.subscription.user.stop();
	}

	courses() {
		// Problem on refres
		if(this.state.subscription.user.ready())
			return Meteor.user().courses;
		return [];
	}

	render() {
		let pointsSum = 0;
		return (
			<ul className="courses">
				{
					this.courses().map((course)=> {
						if(course.finished) {
							pointsSum += course.points;
						}
						return <Course key={course.code} course={course} />
					})
				}
				{ Meteor.user() ?
					<b className="sum-margin">{pointsSum}</b> : 'Does not display sum if not logged in'
				}
			</ul>
		);
	}
}