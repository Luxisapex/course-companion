import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';

import UserCourse from './UserCourse.jsx';

import '../stylesheets/style.css';

export default class CourseList extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				courses: Meteor.subscribe('courses'),
				user: Meteor.subscribe('user')
			}
		}
	}

	componentWillUnmount() {
	    this.state.subscription.courses.stop();
	    this.state.subscription.user.stop();
	}

	courses() {
		if(this.state.subscription.user.ready()) {
			return Meteor.user().courses;
		}
		return [];
	}

	render() {
		let pointsSum = 0;
		return (
			<ul className="courses">
				{
					this.courses().map((course)=> {
						pointsSum += course.points;
						return <UserCourse key={course.code} course={course} />
					})
				}
				<li className="points">{ Meteor.user() ? <b className="sum-margin">Total points: {pointsSum}</b> : 'Does not display sum if not logged in' }</li>				
			</ul>
		);
	}
}