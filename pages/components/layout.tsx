import React, {ReactNode} from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import Navigation from './Navigation';
import HomePage from '..';
import ProjectsPage from '../projects';
import OthersPage from '../others';
import {LeftArrowIcon, OthersIcon, PersonalIcon, ProjectlIcon} from '@/icons';

export default function Layout({children}: {children: ReactNode}) {
	return (
		<div className='dark gradient-background-2 min-h-screen flex md-breakpoint:flex-col md-breakpoint:min-h-full'>
			<LeftContainer className='flex-[2] md-breakpoint:flex-none' />

			<main className='flex-[5] h-screen overflow-y-auto pb-0 md-breakpoint:hidden'>
				<Navigation />
			</main>

			<main className='hidden md-breakpoint:block'>
				<div className='h-full'>
					<div className='flex justify-center items-center p-2 sticky top-0 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-border-color z-50 gap-2'>
						<PersonalIcon />
						<h4 className='text-center text-accent-primary font-semibold'>
							Personal
						</h4>
					</div>
					<HomePage />
				</div>
				<div className='h-full'>
					<div className='flex justify-center items-center p-2 sticky top-0 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-border-color z-50 gap-2'>
						<ProjectlIcon />
						<h4 className='text-center text-accent-primary font-semibold'>
							Projects
						</h4>
					</div>
					<ProjectsPage />
				</div>
				<div className='h-full'>
					<div className='flex justify-center items-center p-2 sticky top-0 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-border-color z-50 gap-2'>
						<OthersIcon />
						<h4 className='text-center text-accent-primary font-semibold'>
							Others
						</h4>
					</div>
					<OthersPage />
				</div>
			</main>
			<RightContainer className='flex-[2] md-breakpoint:flex-none' />
		</div>
	);
}
