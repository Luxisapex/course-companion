// Seems to work without this import

// import { FlowRouter } from 'meteor/kadira:flow-router';

import React from 'react';

// "Mounts" react component on a Layout
import { mount } from 'react-mounter';

// Import all the layouts
import { HomeLayout } from '../../ui/layouts/HomeLayout.jsx';
import { MainLayout } from '../../ui/layouts/MainLayout.jsx';

// Import all the components used in the routes
import CourseList from '../../ui/components/CourseList.jsx';

// Only lets logged in users access anything but the home route
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		mount(HomeLayout, {
			content: (<CourseList />)
		});
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