// Bit messy, clean up

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
			subscription: {
				user: Meteor.subscribe('user')
			}
		};
	}

	handleInput(event) {
		event.preventDefault();
		
		let text = this.refs.input.value.trim();
		let user = Meteor.user();

		if(user.master) {
			
		} else if (user.tech) {
			addMaster.call({
				userId: Meteor.userId(),
				master: text
			});
			this.refs.input.placeholder = '';
		} else if (user.education) {
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


	render() {
		if(this.state.subscription.user.ready()) {
			let user = this.state.subscription.user;
			if(user.master) {
				// this.state = {
				// 	currentInput: ''
				// }
				this.refs.input.hidden = true;
			} else if (user.tech) {
				this.state = {
					currentInput: 'master'
				}
			} else if (user.education) {
				// this.state = {
				// 	currentInput: 'tech'
				// }
				this.refs.input.placeholder = 'tech';
			} else {
				this.state = {
					currentInput: 'edu'
				}
			}
		}

		return (
			<form onSubmit={this.handleInput.bind(this)}> 
				<input
					type="text"
					ref="input"
					placeholder={this.state.currentInput}
				/>
			</form>
		);
	}
};
