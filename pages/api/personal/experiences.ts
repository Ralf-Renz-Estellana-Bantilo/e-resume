import type { NextApiRequest, NextApiResponse } from 'next';

export interface IExperience {
   position: string;
   company: string;
   duration: string;
   description: string[];
   type?: string;
   level?: 'Intern' | 'Junior' | 'Mid-level' | 'Senior';
}

const experiences: IExperience[] = [
   {
      position: 'FRONT-END DEVELOPER',
      company: 'BizBloqs Management Solutions BV',
      duration: 'December 2023 - Present',
      // level: 'Mid-level',
      // type: 'Hybrid',
      description: [
         'Led a cross-functional team of frontend and backend engineers to deliver multiple internal and client-facing web platforms, improving delivery predictability and code quality.',
         'Owned the frontend architecture and UI/UX implementation for core products, defining reusable patterns, component libraries, and best practices adopted across projects.',
         'Redesigned and modernized legacy UIs, improving usability and visual consistency, which contributed to higher user adoption and measurable revenue growth.',
         'Built reusable internal libraries and shared components, reducing duplicated effort and accelerating feature development across teams.',
         'Collaborated with distributed teams across the Philippines, Ukraine, the Netherlands, and the UK, ensuring alignment on technical decisions, timelines, and product requirements.',
         'Conducted in-depth code reviews and technical mentoring, raising overall code quality and helping junior engineers, testers, and UI designers ramp up faster.',
         'Acted as a technical bridge between product, design, and engineering, translating business goals into scalable frontend solutions.',
         'Performed testing, debugging, and troubleshooting to ensure the reliability and functionality of software.',
      ],
   },
   {
      position: 'PROGRAMMER',
      company: 'SL Agritech Corporation | Makati City, PH',
      duration: 'August 2022 - November 2023',
      // level: 'Junior',
      description: [
         'Led the design and development of an internal HR web application, streamlining applicant tracking and onboarding workflows and significantly improving recruitment efficiency.',
         'Improved UI/UX across multiple internal systems, increasing usability and reducing friction for non-technical users.',
         'Resolved critical production bugs and performance issues, improving system reliability and reducing operational disruptions.',
         'Delivered enhancements that improved application performance and responsiveness, contributing to higher internal adoption.',
         'Regularly communicated technical concepts to non-technical stakeholders, enabling faster decision-making and clearer prioritization.',
      ],
   },
   {
      position: 'BACKEND DEVELOPER',
      company: 'Sterling Insurance Company Inc.',
      duration: `April - July 2022`,
      level: 'Intern',
      type: 'Remote',
      description: [
         'Conducted data extraction and processing from Excel files, ensuring accuracy and data integrity.',
         'Developed robust server-side logic and performed regular maintenance to ensure high performance and responsiveness to frontend requests.',
         'Created dynamic APIs to facilitate seamless data exchange and integration with frontend elements.',
         'Conducted diagnostics tests to identify and resolve bugs, ensuring the reliability and stability of the system.',
         'Provided prompt and effective technical support to users, troubleshooting issues and offering solutions to minimize downtime.',
      ],
   },
   {
      position: 'TECHNICAL SUPPORT STAFF',
      company: 'Comelec',
      duration: `February - May 2022`,
      type: 'Part-Time',
      description: [
         'Delivered exemplary Level 1 support, swiftly addressing technical issues, troubleshooting problems, and ensuring timely resolutions to maintain uninterrupted operations.',
         'Demonstrated expertise in equipment maintenance, performing regular checks, repairs, and upgrades to optimize system performance and reliability.',
         'Proactively monitored IT equipment, promptly identifying and mitigating potential issues to minimize downtime and enhance overall system efficiency.',
         `Played a pivotal role in the seamless deployment of IT equipment, ensuring proper setup, configuration, and integration within the organization's infrastructure.`,
      ],
   },
];

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<IExperience[]>
) {
   res.status(200).json(experiences);
}
