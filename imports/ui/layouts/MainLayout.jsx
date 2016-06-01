import '../stylesheets/pure.css';

import React from 'react';

import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';
import CourseList from '../components/CourseList.jsx';
import InputField from '../components/InputField.jsx';
import SearchCourse from '../components/SearchCourse.jsx';

export const MainLayout = () => (
	
	<div className="main-layout">
		<div className="pure-g">
		    <div className="pure-u-3-8">
		    	<AccountsUIWrapper />
				<CourseList />
				<InputField />
		    </div>
		    <div className="pure-u-5-8">
		    	<SearchCourse />
		    </div>
		</div>
	</div>

);