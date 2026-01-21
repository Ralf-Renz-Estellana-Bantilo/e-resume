import { NextApiRequest, NextApiResponse } from 'next';

export interface ISkills {
   icon: string;
   description: string;
   category: string;
   proficiency: string;
}

const skills = [
   {
      icon: 'html.png',
      description: 'HTML',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'css.png',
      description: 'CSS',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'javascript.png',
      description: 'JavaScript',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'react.png',
      description: 'React JS',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'nextjs.png',
      description: 'Next JS',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'typescript.png',
      description: 'TypeScript',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'vuejs.png',
      description: 'Vue JS',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'tailwindcss.png',
      description: 'TailwindCSS',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'styled-components.png',
      description: 'Styled-components',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'vuetify.png',
      description: 'Vuetify',
      category: 'Frontend',
      proficiency: 'Advance',
   },
   {
      icon: 'nodejs.png',
      description: 'Node JS',
      category: 'Backend',
      proficiency: 'Advance',
   },
   {
      icon: 'java.png',
      description: 'Java',
      category: 'Desktop App / Backend',
      proficiency: 'Advance',
   },
   {
      icon: 'mysql.png',
      description: 'MySQL',
      category: 'Database',
      proficiency: 'Advance',
   },
   {
      icon: 'photoshop.png',
      description: 'Photoshop',
      category: 'Design',
      proficiency: 'Advance',
   },
   {
      icon: 'figma.png',
      description: 'Figma',
      category: 'Design',
      proficiency: 'Advance',
   },
   {
      icon: 'git.png',
      description: 'Git',
      category: 'Version Control',
      proficiency: 'Advance',
   },
   {
      icon: 'azure.png',
      description: 'Azure',
      category: 'Cloud Platform',
      proficiency: 'Advance',
   },
   {
      icon: 'jest.png',
      description: 'Jest',
      category: 'Unit Testing',
      proficiency: 'Advance',
   },
   {
      icon: 'playwright.svg',
      description: 'Playwright',
      category: 'End-to-End Testing',
      proficiency: 'Advance',
   },
];

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<ISkills[]>
) {
   return res.status(200).json(skills);
}
