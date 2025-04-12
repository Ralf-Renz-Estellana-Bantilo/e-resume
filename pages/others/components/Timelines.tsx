import {cardVariants, viewportVariant} from '@/utils/Resources';
import {Space, Tag, Timeline} from 'antd';
import {motion} from 'framer-motion';
import React from 'react';

interface ITimeline {
   title: string;
   tags: {
      label: string;
      color: string;
   }[];
   projects: string[];
}

const Timelines = () => {
   const timelines: ITimeline[] = [
      {
         title: '2022 - Present',
         tags: [
            {
               label: 'VueJS',
               color: 'lime',
            },
            {
               label: 'Vuetify',
               color: 'geekblue',
            },
            {
               label: 'ReactJS',
               color: 'cyan',
            },
            {
               label: 'TailwindCSS',
               color: 'blue',
            },
            {
               label: 'NextJS',
               color: 'magenta',
            },
            {
               label: 'TypeScript',
               color: 'blue',
            },
            {
               label: 'Git',
               color: 'orange',
            },
            {
               label: 'ExpressJS',
               color: 'yellow',
            },
            {
               label: 'NodeJS',
               color: 'green',
            },
            {
               label: 'Figma',
               color: 'orange',
            },
         ],
         projects: [
            'E-Resume',
            'Applicant Tracking & Onboarding System',
            'Timekeeping System',
            'Employee Portal',
            'Organizational Chart Library',
            'Personal Expenses Tracker',
            'OMS/WMS',
         ],
      },
      {
         title: '2021 - 2022',
         tags: [
            {
               label: 'MySQL',
               color: 'orange',
            },
            {
               label: 'ExpressJS',
               color: 'yellow',
            },
            {
               label: 'ReactJS',
               color: 'cyan',
            },
            {
               label: 'NodeJS',
               color: 'green',
            },
            {
               label: 'React Native',
               color: 'cyan',
            },
            {
               label: 'TailwindCSS',
               color: 'blue',
            },
            {
               label: 'Git',
               color: 'orange',
            },
         ],
         projects: [
            'Payroll System',
            'TeleConsultation Video Chat App',
            'Timekeeping System',
            'Local Dictionary Portal',
         ],
      },
      {
         title: '2020 - 2021',
         tags: [
            {
               label: 'MySQL',
               color: 'orange',
            },
            {
               label: 'ExpressJS',
               color: 'yellow',
            },
            {
               label: 'ReactJS',
               color: 'cyan',
            },
            {
               label: 'NodeJS',
               color: 'green',
            },
            {
               label: 'Git',
               color: 'orange',
            },
         ],
         projects: ['Job Search System', 'GWA Calculator'],
      },
      {
         title: '2018 - 2020',
         tags: [
            {
               label: 'MySQL',
               color: 'orange',
            },
            {
               label: 'Java',
               color: 'volcano',
            },
            {
               label: 'Photoshop',
               color: 'geekblue',
            },
         ],
         projects: [
            'Random Student Picker Program',
            'Basketball Statistics Program',
            'Test Simulator Program',
         ],
      },
   ];

   return (
      <div className='flex flex-col p-3 max-md:gap-5'>
         <Timeline
            mode={'alternate'}
            className='text-accent-secondary   '
            items={timelines.map((timeline, index) => {
               return {
                  label: timeline.title,
                  children: (
                     <motion.div
                        key={index}
                        variants={cardVariants}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={viewportVariant}>
                        <Space wrap>
                           {timeline.tags.map((tag, i) => (
                              <Tag
                                 className='rounded-full'
                                 key={i}
                                 color={tag.color}>
                                 {tag.label}
                              </Tag>
                           ))}
                        </Space>
                        <div className='flex flex-col p-3'>
                           {timeline.projects.map((project, i) => (
                              <div
                                 className='flex items-center gap-3 text-accent-secondary'
                                 key={i}>
                                 <div>•</div>
                                 <p className='text-xs text-left'>{project}</p>
                              </div>
                           ))}
                        </div>
                     </motion.div>
                  ),
               };
            })}
         />
      </div>
   );
};

export default Timelines;
