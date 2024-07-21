import {OthersIcon, PersonalIcon, ProjectlIcon} from '@/icons';
import HomePage from '@/pages';
import OthersPage from '@/pages/others';
import ProjectsPage from '@/pages/projects';
import React from 'react';

const MobileContents = () => {
	return (
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
	);
};

export default MobileContents;
