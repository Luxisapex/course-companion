import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';
import SearchableCourse from './SearchableCourse.jsx';

export default class SearchCourse extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			search: '',
			subscription: {
				user: Meteor.subscribe('user'),
				courses: Meteor.subscribe('courses')
			}
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	// Filter input on existing courses
	courses() {
		if(this.state.subscription.user.ready()) {
			return Courses.find({ "$or": [
				{"code": {$regex : this.state.search.toUpperCase()}},
				{"name": {$regex : new RegExp(this.state.search, "i")}}
				]}).fetch();
		}
		return [];
	}

	render() {	
		return (
			<div>	
				<input 
					type="text" 
					value={this.state.search} 
					onChange={this.updateSearch.bind(this)}
					placeholder="Search for a course"
				/>	
				<ul>
					{this.courses().map((course) => {
						return <SearchableCourse key={course._id} course={course}/>
					})}
				</ul>
			</div>
		);
	}
};




