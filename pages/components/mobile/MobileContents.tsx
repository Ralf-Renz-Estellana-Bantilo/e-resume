import { OthersIcon, PersonalIcon, ProjectlIcon } from '@/icons';
import OthersTab from '@/pages/tabs/others';
import PersonalTab from '@/pages/tabs/personal';
import ProjectsTab from '@/pages/tabs/projects';
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
            <PersonalTab />
         </div>
         <div className='h-full'>
            <div className='sticky top-0 z-50 flex items-center justify-center gap-2 p-2 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700'>
               <ProjectlIcon />
               <h4 className='font-semibold text-center text-accent-primary'>
                  Projects
               </h4>
            </div>
            <ProjectsTab />
         </div>
         <div className='h-full'>
            <div className='sticky top-0 z-50 flex items-center justify-center gap-2 p-2 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700'>
               <OthersIcon />
               <h4 className='font-semibold text-center text-accent-primary'>
                  Others
               </h4>
            </div>
            <OthersTab />
         </div>
      </main>
   );
};

export default MobileContents;
