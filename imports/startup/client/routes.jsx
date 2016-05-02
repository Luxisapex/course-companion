// Seems to work without this import

// import { FlowRouter } from 'meteor/kadira:flow-router';

import React from 'react';

// "Mounts" react component on a Layout
import { mount } from 'react-mounter';

// Import all the layouts
import { HomeLayout } from '../../ui/layouts/HomeLayout.jsx';
import { MainLayout } from '../../ui/layouts/MainLayout.jsx';

// Import all the components used in the routes
import App from '../../ui/components/App.jsx';
import CourseList from '../../ui/components/CourseList.jsx';

// Dummy data
let courses = [
	{
		code: "TATA00",
		name: "Matematisk grundkurs"
	}, {
		code: "TATA01",
		name: "Matematisk fortsattningskurs"
	}, {
		code: "TEIE00",
		name: "Ekonomisk grundkurs"
	}, {
		code: "TEIE01",
		name: "Ekonomisk fortsattningskurs"
	}
];


// Pretty declarative syntax. Mounts the HomeLayout with the App component
FlowRouter.route('/', {
	name: 'home',
	action() {
		mount(HomeLayout, {
			content: (<CourseList courses={courses}/>)
		});
	}
});

FlowRouter.route('/main', {
	name: 'main',
	action() {
		mount(MainLayout, {
			content: (<App />)
		});
	}
});