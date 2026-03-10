import type { NextApiRequest, NextApiResponse } from 'next';

export interface IServices {
   category: string;
   items: string[];
}

const services: IServices[] = [
   {
      category: 'FRONTEND',
      items: [
         'In-house Libraries and Tools',
         'Reusable Components',
         'Progresive Web Application (PWA)',
      ],
   },
   {
      category: 'BACKEND',
      items: [
         'Database Management',
         'Dynamic RESTful APIs',
         'NoSQL & Relational Databases',
      ],
   },
   {
      category: 'FULLSTACK',
      items: [
         'System Deployment',
         'Architectural Design',
         'Object-Oriented Programming',
      ],
   },
   {
      category: 'DESIGN',
      items: ['UI/UX Design', 'Prototyping Tool', 'Graphic Design'],
   },
];

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<IServices[]>
) {
   res.status(200).json(services);
}
