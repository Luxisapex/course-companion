// Single course listing

// Should link to course page

// Checkbox should mark course as completed (greyed)

// X should remove course from student's profile

import '../stylesheets/pure.css';
import '../stylesheets/style.css';
import '../stylesheets/font-awesome.css';
// Need this?
import '../../api/courses/courses.js';
import '../../api/courses/methods.js';

import React from 'react';

export default class Course extends React.Component {

	removeCourse() {
		Meteor.call('deleteCourse', this.props.course._id);
	}

	toggleFinished() {
		Meteor.call('toggleFinished', this.props.course._id, this.props.course.finished);	
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
					onClick={this.toggleFinished.bind(this)}
				/>
				<a className="pure-u-1-24" href="" onClick={this.removeCourse.bind(this)}>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</a>
			</li>
		);
	}
}