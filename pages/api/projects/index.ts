import type { NextApiRequest, NextApiResponse } from 'next';

export interface IProjects {
   title: string;
   description: string;
   tagIDs: number[];
   coverURLs: string[];
   duties?: string[];
}

const mernStack: number[] = [4, 10, 1, 3];

const projects: IProjects[] = [
   {
      title: 'Order Management System',
      description:
         'A full cloud-based Order Management System (OMS) for companies of any size. Manage orders, sales, purchasing, production and assembly from one cockpit.',
      tagIDs: [1, 13, 14, 9],
      coverURLs: [
         'Order Management System/pic1.png',
         'Order Management System/pic2.png',
         'Order Management System/pic3.png',
         'Order Management System/pic4.png',
      ],
      duties: [
         'Software Development Team Leader',
         'Lead Front End Developer',
         'UI/UX Designer',
      ],
   },
   {
      title: 'Applicant Tracking & Onboarding System',
      description:
         ' A software application designed to manage the recruitment process and streamline the onboarding of new hires.',
      tagIDs: [2, 4, 6, 7, 11, 9],
      coverURLs: [
         'Onboarding System/pic3.png',
         'Onboarding System/pic4.png',
         'Onboarding System/pic5.png',
         'Onboarding System/code.png',
      ],
      duties: ['Lead Developer', 'UI/UX Designer'],
   },
   {
      title: 'Organizational Chart Library',
      description:
         'A centralized system that displays the company’s hierarchy, departments, and reporting structure, making it easy to find teams and understand organizational relationships.',
      tagIDs: [2, 4, 6, 7, 11, 9],
      coverURLs: [],
      duties: ['Lead Developer', 'UI/UX Designer'],
   },
   {
      title: 'Offboarding System',
      description:
         'A self-service platform where employees can access personal information, company updates, HR services, and essential tools in one convenient place.',
      tagIDs: [2, 4, 6, 7, 11, 9],
      coverURLs: [],
      duties: ['Lead Developer', 'UI/UX Designer'],
   },
   {
      title: 'Employee Portal',
      description:
         'An automated workflow that manages the employee exit process, ensuring smooth coordination between HR, IT, and management while maintaining compliance and proper documentation.',
      tagIDs: [2, 4, 6, 7, 11, 9],
      coverURLs: [],
      duties: ['Full Stack Developer', 'UI/UX Designer'],
   },
   {
      title: 'Payroll System',
      description:
         'A software application designed to automate the process of calculating and managing employee salaries and wages.',
      tagIDs: [...mernStack, 2, 5, 9],
      coverURLs: [
         'Payroll System/pic1.png',
         'Payroll System/pic2.png',
         'Payroll System/pic3.png',
         'Payroll System/pic4.png',
         'Payroll System/code.png',
      ],
      duties: ['Team Leader', 'Lead Front End Developer'],
   },
   {
      title: 'E-Portfolio',
      description:
         'A personal website designed to help me showcase my work and achievements in a professional manner online.',
      tagIDs: [1, 13, 5, 14, 9],
      coverURLs: ['E-Resume/pic1.png', 'E-Resume/code.png'],
   },
   {
      title: 'Quiz Maker',
      description:
         'A software application designed to simulate and provide practice for various types of tests, such as standardized tests or certification exams.',
      tagIDs: [...mernStack, 9, 13, 14, 5],
      coverURLs: [
         'Quiz Maker/quiz-maker-1.png',
         'Quiz Maker/quiz-maker-2.png',
         'Quiz Maker/quiz-maker-3.png',
         'Quiz Maker/quiz-maker-4.png',
      ],
   },
   {
      title: 'Expenses Tracker Program',
      description:
         'A personal application designed to help me keep track of my expenses and manage my finances effectively.',
      tagIDs: [...mernStack, 2, 5, 9],
      coverURLs: [
         'Expenses Tracker/pic3.png',
         'Expenses Tracker/pic4.png',
         'Expenses Tracker/pic5.png',
         'Expenses Tracker/code.jpg',
      ],
   },
   {
      title: 'GWA Calculator Program',
      description: `A software application designed to calculate a student's average grade based on the grades received in individual courses.`,
      tagIDs: [1, 2, 8],
      coverURLs: ['GWA Calculator/pic1.jpg', 'GWA Calculator/code.jpg'],
   },
   {
      title: 'Job Search System',
      description:
         'A software application designed to help job seekers search and apply for job opportunities online.',
      tagIDs: [...mernStack, 2, 8],
      coverURLs: [
         'Job Search System/pic1.png',
         'Job Search System/pic2.png',
         'Job Search System/pic3.png',
         'Job Search System/pic4.png',
         'Job Search System/code.jpg',
      ],
   },
   {
      title: 'Basketball Statistics Program',
      description:
         'A software application designed to track and analyze player and team performance in basketball games.',
      tagIDs: [12, 4, 8],
      coverURLs: [
         'Game Statistics Program/pic1.jpg',
         'Game Statistics Program/pic2.jpg',
         'Game Statistics Program/pic3.jpg',
         'Game Statistics Program/pic4.jpg',
         'Game Statistics Program/code.jpg',
      ],
   },
   {
      title: 'Random Student Picker Program',
      description:
         ' A software application designed to randomly select students from a list or group for classroom participation or other activities.',
      tagIDs: [12, 4, 8],
      coverURLs: [
         'Student Picker Program/pic1.jpg',
         'Student Picker Program/pic2.jpg',
         'Student Picker Program/pic3.jpg',
         'Student Picker Program/code.jpg',
      ],
   },
];

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<IProjects[]>
) {
   res.status(200).json(projects);
}
