import { mount } from 'react-mounter';

// Import all the layouts
import { HomeLayout } from '../../ui/layouts/HomeLayout.jsx';
import { MainLayout } from '../../ui/layouts/MainLayout.jsx';

// Checks login/logout actions
if(Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('main');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
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
		mount(MainLayout);
	}
});