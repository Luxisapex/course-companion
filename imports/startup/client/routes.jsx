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

// Pretty declarative syntax. Mounts the HomeLayout with the App component
FlowRouter.route('/', {
	name: 'home',
	action() {
		mount(HomeLayout, {
			content: (<App />)
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