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
			courseId: this.props.course.code
		});
	}

	addCourse() {
		console.log("Added the course")
		console.log(this.props.course);
		addCourse.call({
			userId: Meteor.userId(),
			courses: [this.props.course.name, this.props.course.code]
		});
	}

	toggleChecked() {
		toggleFinished.call({
			// userId: Meteor.userId(),
			courseId: this.props.course.code,
			currentState: this.props.course.finished
		});
	}

	render() {
		const courseClass = this.props.course.finished ? "pure-g checked" : "pure-g";

		return (
			<li className={courseClass}>
				<a className="pure-u-1-12" href="/main">{this.props.course.code}</a>
				<span className="pure-u-1-24">{this.props.course.points}</span>
				<span className="pure-u-1-8">{this.props.course.name}</span>
				<input className="pure-u-1-24" 
					type="checkbox"
					readOnly={true}
					checked={this.props.course.finished}
					onClick={this.toggleChecked.bind(this)}
				/>
				<a className="pure-u-1-24" href="" onClick={this.removeCourse.bind(this)}>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</a>
				<a className="pure-u-1-24" href="" onClick={this.addCourse.bind(this)}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}