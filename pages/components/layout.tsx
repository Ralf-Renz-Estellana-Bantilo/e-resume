import React, {ReactNode} from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import Navigation from './Navigation';

export default function Layout({children}: {children: ReactNode}) {
	return (
		<div className='dark gradient-background-2 min-h-screen flex'>
			<LeftContainer className='flex-[2]' />
			<main className='flex-[5] h-screen overflow-y-auto pb-0'>
				<Navigation />
			</main>
			<RightContainer className='flex-[2]' />
		</div>
	);
}
