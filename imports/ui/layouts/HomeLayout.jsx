import React from 'react';

import AccountsUIWrapper from '../components/AccountsUIWrapper.jsx';

export const HomeLayout = ({content}) => (
	<div className="home-layout">
		<AccountsUIWrapper />
		{content}
	</div>
)