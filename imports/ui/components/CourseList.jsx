// Lists courses associated with a student

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';

import Course from './Course.jsx';

export default class CourseList extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				courses: Meteor.subscribe('courses')
			}
		}
	}

	componentWillUnmount() {
	    this.state.subscription.tasks.stop();  
	}

	courses() {
		return Courses.find({}).fetch();
	}

	// Sums up all HP as well as render all courses, look over later
	render() {
		let pointsSum = 0;
		return (
			<ul className="courses">
				{this.courses().map((course)=> {
					if(course.finished) {
						pointsSum += course.points;
					}
					return <Course key={course._id} course={course} />
				})}
				{ Meteor.user() ?
					<b className="sum-margin">{pointsSum}</b> : 'Does not display sum if not logged in'
				}
			</ul>
		);
	}
}