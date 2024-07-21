import React from 'react';
import MobileContents from './mobile/MobileContents';
import DesktopContents from './desktop/DesktopContents';

const ResponsiveContents = () => {
	return (
		<>
			<MobileContents />
			<DesktopContents />
		</>
	);
};

export default ResponsiveContents;
