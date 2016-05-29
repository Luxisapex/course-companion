// Bit messy, clean up

import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import { Educations } from '../../api/educations/educations.js';

import { addEducation, addTechnical, addMaster, refreshCourses } from '../../api/users/methods.js';

export default class InputField extends TrackerReact(React.Component) {
	// Needed to make sure reloading works
	constructor() {
		super();
		this.state = {
			search: '',
			subscription: {
				user: Meteor.subscribe('user')
			}
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	educations() {
		return Educations.find({"name": {$regex : new RegExp(this.state.search, "i")}}).fetch();
	}

	handleInput(event) {
		event.preventDefault();
		
		let text = this.refs.input.value.trim();
		let user = Meteor.user();

		if(user.master) {
			
		} else if (user.technical) {
			addMaster.call({
				userId: Meteor.userId(),
				master: text
			});
		} else if (user.education) {
			addTechnical.call({
				userId: Meteor.userId(),
				technical: text
			});
		} else {
			addEducation.call({
				userId: Meteor.userId(),
				education: text
			});
		}

		this.refs.input.value = "";
	}

	// Temporary solution to do async
	handleButton(event) {
		event.preventDefault();
		
		refreshCourses.call({
			userId: Meteor.userId()
		});
	}

	render() {
		if(this.state.subscription.user.ready()) {
			let user = Meteor.user();
			if(user.master) {
				this.refs.input.hidden = true;
			} else if (user.technical) {
				this.refs.input.placeholder = 'Master profile';
			} else if (user.education) {
				this.refs.input.placeholder = 'Technical specialization';
			} else {
				this.refs.input.placeholder = 'Education';
			}
		}

		return (
			<div>
				<form onSubmit={this.handleInput.bind(this)}> 
					<input
						type="text"
						value={this.state.search}
						onChange={this.updateSearch.bind(this)}
						ref="input"
					/>
					<input
						type="button"
						ref="button"
						value="Update courses"
						onClick={this.handleButton.bind(this)}
					/>
				</form>
				<ul>	
						
					{this.educations().map((education) => {
						return education.name;
					})}

						
				</ul>
			</div>
		);
	}
};
