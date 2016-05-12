// Takes input data and does something
// Should take different shape depending on expected input

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { addEducation, addTech, addMaster } from '../../api/users/methods.js';

export default class InputField extends TrackerReact(React.Component) {

	// State depends on what user has input so far. Edu > Tech > Master > None
	// constructor() {
	// 	super();

	// 	// this.state = {
	// 	// 	subscription: {
	// 	// 		users: Meteor.subscribe('userData')
	// 	// 	}
	// 	// }

	// 	if(Meteor.user().master) {
	// 		this.state = {
	// 			currentInput: ''
	// 		}
	// 	} else if (Meteor.user().tech) {
	// 		this.state = {
	// 			currentInput: 'master'
	// 		}
	// 	} else if (Meteor.user().education) {
	// 		this.state = {
	// 			currentInput: 'tech'
	// 		}
	// 	} else {
	// 		this.state = {
	// 			currentInput: 'edu'
	// 		}
	// 	}
	// }

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



		// addEducation.call({
		// 	userId: Meteor.userId(),
		// 	education: text
		// });

		this.refs.input.value = "";
		
		// Next input (dynamic somehow)
		// this.state.currentInput = 'tech';
		// this.refs.input.placeholder = this.state.currentInput;
		// this.refs.input.placeholder = "...";
	}

	render() {
		if(Meteor.user().master) {
			this.state = {
				currentInput: ''
			}
		} else if (Meteor.user().tech) {
			this.state = {
				currentInput: 'master'
			}
		} else if (Meteor.user().education) {
			this.state = {
				currentInput: 'tech'
			}
		} else {
			this.state = {
				currentInput: 'edu'
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