import React, { Component } from 'react';
import Course from './Course.jsx';
import { addCourse } from '../../api/users/methods.js';

export default class SearchableCourse extends Component {
	
	addCourse() {
		addCourse.call({
			userId: Meteor.userId(),
			courseId: this.props.course.code
		});
	}

	render() {
		return(
			<div>
				<Course key={this.props.course._id} course={this.props.course}/>
				<a className="pure-u-1-24" href="" onClick={this.addCourse.bind(this)}>
					<i className="fa fa-plus" aria-hidden="true"></i>
				</a>
			</div>
		);
	}
}