'use client';

import React from 'react';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import HomePage from '..';
import OthersPage from '../others';
import ProjectsPage from '../projects';
import { OthersIcon, PersonalIcon, ProjectlIcon } from '@/icons';

const Navigation = () => {
   const tabs = [
      {
         key: '/',
         title: 'Personal',
         content: <HomePage />,
         icon: <PersonalIcon />,
      },
      {
         key: '/projects',
         title: 'Projects',
         content: <ProjectsPage />,
         icon: <ProjectlIcon />,
      },
      {
         key: '/others',
         title: 'Others',
         content: <OthersPage />,
         icon: <OthersIcon />,
      },
   ];

   return (
      <div className='flex flex-col items-center w-full'>
         <Tabs
            className='sticky top-0 z-50 p-3 bg-slate-500 backdrop-filter backdrop-blur-sm bg-opacity-10 border-b-1 border-slate-700'
            items={tabs}
            color='primary'
            fullWidth>
            {(item) => (
               <Tab
                  key={item.key}
                  title={
                     <div className='flex items-center space-x-2'>
                        {item.icon}
                        <span>{item.title}</span>
                     </div>
                  }>
                  {item.content}
               </Tab>
            )}
         </Tabs>
      </div>
   );
};

export default Navigation;
