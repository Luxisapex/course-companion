// Single course listing

// Should link to course page

// Trashcan should remove course from student's profile

import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';
// Need this?
import { Courses } from '../../api/courses/courses.js';

import { toggleFinished, deleteCourse } from '../../api/courses/methods.js';
import { addCourse } from '../../api/users/methods.js';

import React from 'react';

export default class Course extends React.Component {

	removeCourse() {
		deleteCourse.call({
			userId: Meteor.userId(),
			courseId: this.props.course.code
		});
	}

	// toggleChecked() {
	// 	toggleFinished.call({
	// 		userId: Meteor.userId(),
	// 		courseId: this.props.course.code,
	// 		currentState: this.props.course.finished
	// 	});
	// }

	render() {

		const courseClass = this.props.course.finished ? "pure-g checked" : "pure-g";
		const linkAddress = "http://kdb-5.liu.se/liu/lith//studiehandboken/svkursplan.lasso?k_budget_year=2016&k_kurskod=" + this.props.course.code;
		let typeIconClass = '';
		if(this.props.type === 'master') {
			typeIconClass = 'fa fa-star';
		} else if (this.props.type === 'technical') {
			typeIconClass = 'fa fa-wrench';
		} else if (this.props.type === 'base') {
			typeIconClass = 'fa fa-pencil';
		} else {
			typeIconClass = 'fa fa-question';
		}

		return (
			<li className={courseClass}>
				<a className="pure-u-1-12" href={linkAddress}>{this.props.course.code}</a>
				<span className="pure-u-1-24">{this.props.course.points}</span>
				<span className="pure-u-1-24"><i className={typeIconClass}></i></span>
				<span className="pure-u-1-6">{this.props.course.name}</span>
				
				<a className="pure-u-1-24" href="" onClick={this.removeCourse.bind(this)}>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}

// <input className="pure-u-1-24" 
// 	type="checkbox"
// 	readOnly={true}
// 	checked={this.props.course.finished}
// 	onClick={this.toggleChecked.bind(this)}
// />