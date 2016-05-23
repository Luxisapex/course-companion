// Takes input data and does something
// Should take different shape depending on expected input

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

//Importing these two for trying courses with search bar
import { Courses } from '../../api/courses/courses.js';

import Course from './Course.jsx';
//

import { addEducation, addTech, addMaster } from '../../api/users/methods.js';

export default class InputField extends TrackerReact(React.Component) {
	constructor() {
		super();
		this.state = {
			search: 'TEIE17'
		};
	}

	handleInput(event) {
		event.preventDefault();
		
		let text = this.refs.input.value.trim();


		if(Meteor.user().master) {
			
		} else if (Meteor.user().tech) {
			addMaster.call({
				userId: Meteor.userId(),
				master: text
			});
			this.refs.input.placeholder = '';
		} else if (Meteor.user().education) {
			addTech.call({
				userId: Meteor.userId(),
				tech: text
			});
			this.refs.input.placeholder = 'master';
		} else {
			addEducation.call({
				userId: Meteor.userId(),
				education: text
			});
			this.refs.input.placeholder = 'tech';
		}




		this.refs.input.value = "";
		
	}

	updateSearch(event) {
		this.setState({search: event.target.value.substr(0, 20)})
	}	

	courses() {
		return Courses.find({}).fetch();
	}

	coursesSelected() {
		console.log(this.state.search);
		return Courses.find({code: this.state.search.toUpperCase()});
	}

	render() {
		return (
			<div>
				<p>InputField</p>
				/*<input type="text" value={this.state.search} 
					onChange={this.updateSearch.bind(this)} />
				<ul>	
						
						{console.log(this.state)}


						{Meteor.user().master}
						{this.state.currentInput}
						{this.coursesSelected().map((course) => {
							return <Course key={course._id} course={course} />
						})}

						
				</ul>*/
			</div>

		);
	}
};
