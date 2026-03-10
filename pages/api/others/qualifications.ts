import { NextApiRequest, NextApiResponse } from 'next';

export interface IQualification {
   title: string;
   description: string[];
}

const qualifications: IQualification[] = [
   {
      title: 'Strong Programming Skills',
      description: [
         'Proficiency in more than one programming languages/frameworks such as JavaScript, ReactJS, VueJS, TypeScript, NextJS, NodeJS, TailwindCSS, Java, and MySQL.',
         'Familiarity with technologies & frameworks such as React Native, Remix, Flutter, Spring Boot, Python, ElectronJS, Qwik, SolidJS, NestJS, NoSQL, Heroku, Vercel, Netlify, Cloudinary, AWS (S3 Bucket), PHP, Redux, Material UI, Bootstrap, and many more.',
         'Ability to write clean, efficient, reusable, dynamic, and maintainable code.',
      ],
   },
   {
      title: 'UI/UX Design Skills',
      description: [
         'The ability to easily create UI/UX design mockups using Figma.',
         'Ability to translate business requirements into modern UI designs.',
      ],
   },
   {
      title: 'Problem-Solving Skills',
      description: [
         'Strong analytical and problem-solving abilities to tackle complex technical challenges.',
         'A knack for breaking down large problems into smaller, manageable tasks.',
         'Ability to foresee potential bugs before they even occur.',
      ],
   },
   {
      title: 'Software Development Lifecycle',
      description: [
         'Knowledge of software development methodologies, such as Agile, Scrum, or Waterfall.',
         'Experience with version control systems like Git (Github / GitLab).',
      ],
   },
   {
      title: 'Debugging and Troubleshooting',
      description: [
         'Excellent debugging skills',
         'Proficiency in debugging techniques and tools to identify and resolve issues efficiently.',
         'Ability to debug codebase that I did not even write.',
      ],
   },
   {
      title: 'Communication Skills',
      description: [
         'Effective communication skills to collaborate with cross-functional teams, including designers, product managers, and QA engineers',
         'Clear documentation and code comments',
      ],
   },
   {
      title: 'Continuous Learning',
      description: [
         'A commitment to staying up-to-date with industry trends and emerging technologies.',
         'Willingness to learn new languages, frameworks, and tools as needed.',
      ],
   },
   {
      title: 'Testing and Quality Assurance',
      description: [
         'Knowledge of testing methodologies, including unit testing, integration testing, and automated testing',
         'Focus on writing reliable and robust code',
      ],
   },
   {
      title: 'Performance Optimization',
      description: [
         'The ability to identify and optimize bottlenecks in code or system performance.',
      ],
   },
   {
      title: 'Security Awareness',
      description: [
         'An understanding of security best practices and the ability to write secure code.',
         'Awareness of common security vulnerabilities and how to mitigate them.',
      ],
   },
   {
      title: 'Teamwork and Collaboration',
      description: [
         'Strong interpersonal skills and the ability to work effectively in a team.',
         'Willingness to mentor and help junior developers.',
      ],
   },
   {
      title: 'Adaptability',
      description: [
         'Flexibility to adapt to changing requirements and technologies.',
         'Ability to pivot when needed to meet project goals.',
      ],
   },
   {
      title: 'Soft Skills',
      description: [
         'Strong problem-solving skills, critical thinking, and attention to detail.',
         'Patience and persistence in troubleshooting and debugging.',
      ],
   },
   {
      title: 'Ethical and Professional Behavior',
      description: [
         'Adherence to ethical standards and professionalism in all aspects of work.',
         'Respect for intellectual property and confidentiality.',
      ],
   },
];

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<IQualification[]>
) {
   return res.status(200).json(qualifications);
}
