import { NextApiRequest, NextApiResponse } from 'next';

export interface ITimeline {
   title: string;
   tags: {
      label: string;
      color: string;
   }[];
   projects: string[];
}

const timeline: ITimeline[] = [
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
         'Quiz Maker',
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

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<ITimeline[]>
) {
   return res.status(200).json(timeline);
}
