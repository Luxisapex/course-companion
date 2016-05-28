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

export default class SearchableCourse extends React.Component {
	
	addCourse() {
		console.log("Added the course")
		console.log(this.props.course);
		addCourse.call({
				userId: Meteor.userId(),
				courses: [this.props.course.name, this.props.course.code]
		});
	}

	render() {

		const courseClass = this.props.course.finished ? "pure-g checked" : "pure-g";

		return (
			<li className={courseClass}>
				<a className="pure-u-1-12" href="/main">{this.props.course.code}</a>
				<span className="pure-u-1-24">{this.props.course.points}</span>
				<span className="pure-u-1-8">{this.props.course.name}</span>
				<a className="pure-u-1-24" href="" onClick={this.addCourse.bind(this)}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}