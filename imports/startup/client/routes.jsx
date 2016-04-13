// import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

import { MainLayout } from '../../ui/layouts/MainLayout.jsx';
import App from '../../ui/components/App.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<App />)
		})
	}
});