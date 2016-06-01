import React, { Component } from 'react';
import Course from './Course.jsx';
import { deleteCourse } from '../../api/users/methods.js';

export default class UserCourse extends Component {
	
	deleteCourse() {
		deleteCourse.call({
			userId: Meteor.userId(),
			courseId: this.props.course._id
		});
	}

	render() {
		return(
			<div>
				<Course key={this.props.course._id} course={this.props.course}/>
				<a className="pure-u-1-24" href="" onClick={this.deleteCourse.bind(this)}>
					<i className="fa fa-trash" aria-hidden="true"></i>
				</a>
			</div>
		);
	}
}