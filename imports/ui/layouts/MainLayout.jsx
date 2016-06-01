import '../stylesheets/pure.css';

import React from 'react';

import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import UserWrapper from '../components/UserWrapper.jsx';
import SearchEducation from '../components/SearchEducation.jsx';
import SearchCourse from '../components/SearchCourse.jsx';

export const MainLayout = () => (
	
	<div className="main-layout">
		<div className="pure-g">
		    <div className="pure-u-1-2">
		    	<AccountsUIWrapper />
				<UserWrapper />
				<SearchEducation />
		    </div>
		    <div className="pure-u-1-2">
		    	<SearchCourse />
		    </div>
		</div>
	</div>

);