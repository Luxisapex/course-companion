// Single course listing

// Should link to course page

// Checkbox should mark course as completed (greyed)

// X should remove course from student's profile

import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';
import '../../api/courses/courses.js';

import React from 'react';

export default class Course extends React.Component {

	removeCourse() {
		Meteor.call('deleteCourse', this.props.course._id);
	}

	toggleFinished() {
		Meteor.call('toggleFinished', this.props.course._id, this.props.course.finished);	
	}

	render() {

		const courseClass = this.props.course.finished ? "checked" : "";

		return (
			<li className={courseClass}>
				<a href="/main">{this.props.course.code}</a>
				{this.props.course.points}
				{this.props.course.name}
				<input type="checkbox"
					readOnly={true}
					checked={this.props.course.finished}
					onClick={this.toggleFinished.bind(this)}
				/>
				<a href="" onClick={this.removeCourse.bind(this)}>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}