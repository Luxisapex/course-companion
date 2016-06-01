import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Courses } from '../../api/courses/courses.js';
import SearchableCourse from './SearchableCourse.jsx';

export default class SearchCourse extends TrackerReact(Component) {

	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	// Filter input on existing courses
	courses() {
		return Courses.find({ "$or": [
			{"code": {$regex : this.state.search.toUpperCase()}},
			{"name": {$regex : new RegExp(this.state.search, "i")}}
			]}).fetch();
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




