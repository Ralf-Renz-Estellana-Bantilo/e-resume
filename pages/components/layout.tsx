import React, {ReactNode} from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import ResponsiveContents from './ResponsiveContents';

export default function Layout({children}: {children: ReactNode}) {
	return (
		<div className='dark gradient-background-2 min-h-screen flex md-breakpoint:flex-col md-breakpoint:min-h-full'>
			<LeftContainer className='flex-[2] md-breakpoint:flex-none' />

			{/* Middle Contents */}
			<ResponsiveContents />

			<RightContainer className='flex-[2] md-breakpoint:flex-none' />
		</div>
	);
}
