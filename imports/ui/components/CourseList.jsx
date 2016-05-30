// Lists courses associated with a student

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';
import { Courses } from '../../api/courses/courses.js';

import Course from './Course.jsx';

import '../stylesheets/style.css';

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
		if(this.state.subscription.user.ready()) {
			return Meteor.user().courses;
		}
		return [];
	}

	educationPoints() {
		if(this.state.subscription.user.ready()) {
			if(Meteor.user().education) {
				return Meteor.user().education.requirements;
			}
		}
		return 0;
	}

	technicalPoints() {
		if(this.state.subscription.user.ready()) {
			if(Meteor.user().technical) {
				return Meteor.user().technical.requirements;
			}
		}
		return 0;
	}

	masterPoints() {
		if(this.state.subscription.user.ready()) {
			if(Meteor.user().master) {
				return Meteor.user().master.requirements;
			}
		}
		return 0;
	}

	render() {
		let pointsSum = 0;
		return (
			<ul className="courses">
				{
					this.courses().map((course)=> {
						pointsSum += course.points;
						return <Course key={course.code} course={course} />
					})
				}
				<li className="points">{ Meteor.user() ? <b className="sum-margin">Total points: {pointsSum}</b> : 'Does not display sum if not logged in' }</li>

				<li className="points"><b>Left to graduate {this.educationPoints() - pointsSum}</b></li>
				<li className="points"><b>Left to finish technical {this.technicalPoints() - pointsSum}</b></li>
				<li className="points"><b>Left to finish master {this.masterPoints() - pointsSum}</b></li>
				
			</ul>
		);
	}
}
// { Meteor.user().technical ? <li className="points"><br/><b>Left to finish technical {Meteor.user().technical.requirements - pointsSum}</b></li> : '' }
				// { Meteor.user().master ? <li className="points"><br/><b>Left to finish master {Meteor.user().master.requirements - pointsSum}</b></li> : '' }