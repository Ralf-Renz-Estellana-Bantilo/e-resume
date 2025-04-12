import {OthersIcon, PersonalIcon, ProjectlIcon} from '@/icons';
import HomePage from '@/pages';
import OthersPage from '@/pages/others';
import ProjectsPage from '@/pages/projects';
import React from 'react';

const MobileContents = () => {
   return (
      <main className='hidden md-breakpoint:block'>
         <div className='h-full'>
            <div className='sticky top-0 z-50 flex items-center justify-center gap-2 p-2 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700'>
               <PersonalIcon />
               <h4 className='font-semibold text-center text-accent-primary'>
                  Personal
               </h4>
            </div>
            <HomePage />
         </div>
         <div className='h-full'>
            <div className='sticky top-0 z-50 flex items-center justify-center gap-2 p-2 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700'>
               <ProjectlIcon />
               <h4 className='font-semibold text-center text-accent-primary'>
                  Projects
               </h4>
            </div>
            <ProjectsPage />
         </div>
         <div className='h-full'>
            <div className='sticky top-0 z-50 flex items-center justify-center gap-2 p-2 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700'>
               <OthersIcon />
               <h4 className='font-semibold text-center text-accent-primary'>
                  Others
               </h4>
            </div>
            <OthersPage />
         </div>
      </main>
   );
};

export default MobileContents;
