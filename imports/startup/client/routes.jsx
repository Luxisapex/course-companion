// Seems to work without this import

// import { FlowRouter } from 'meteor/kadira:flow-router';

import React from 'react';

// Renders empty object so not very useful.. try to fix
// import Accounts from 'meteor/gwendall:auth-client-callbacks';

// "Mounts" react component on a Layout
import { mount } from 'react-mounter';

// Import all the layouts
import { HomeLayout } from '../../ui/layouts/HomeLayout.jsx';
import { MainLayout } from '../../ui/layouts/MainLayout.jsx';

// Import all the components used in the routes
import CourseList from '../../ui/components/CourseList.jsx';

// Moves user when login/out action is taken
// Missing Accounts for now fix later
// if(Meteor.isClient) {
// 	Accounts.onLogin(function() {
// 		FlowRouter.go('main');
// 	});

// 	Accounts.onLogout(function() {
// 		FlowRouter.go('home');
// 	});
// }

// Will do for now, but only works on login and throws console errors
if(Meteor.isClient) {
	Tracker.autorun(function() {
		if(Meteor.userId()) {
			FlowRouter.go('main');
		}
	});
}

// Only lets logged in users access anything but the home route
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('main');
		}
		mount(HomeLayout);
	}
});

FlowRouter.route('/main', {
	name: 'main',
	action() {
		mount(MainLayout, {
			content: (<CourseList />)
		});
	}
});