import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';
// import { Courses } from '../../api/courses/courses.js';

// import { Users } from '../../api/users/users.js';

import Course from './Course.jsx';

export default class EducationList extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				educations: Meteor.subscribe('educations'),
				// user: Meteor.subscribe('userData')
			}
		}
	}

	componentWillUnmount() {
	    this.state.subscription.educations.stop();
	    // this.state.subscription.user.stop();
	}

	educations() {
		return Educations.find({}).fetch();
	}

	render() {
		let pointsSum = 0;
		return (
			<ul className="courses">
				{this.educations().map((education)=> {
					console.log(education);
					return education.name;
				})}
				{ Meteor.user() ?
					<b className="sum-margin">{pointsSum}</b> : 'Does not display sum if not logged in'
				}
			</ul>
		);
	}
}

// this.education.mandatoryCourses.map((course) => {
// 						return <Course key={course._id} course={course} />
// 					})