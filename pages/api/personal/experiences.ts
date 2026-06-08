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
            'Led cross-functional teams of 7-9 engineers to deliver scalable web applications, improving delivery speed by ~35% and reducing production issues by ~70%.',
            'Leveraged AI-assisted development tools (Claude Code, ChatGPT, GitHub Copilot) to reduce development time for boilerplate and refactoring tasks by ~50%, while maintaining code quality standards.',
            'Modernized legacy UIs, significantly improving usability and contributing to a 3x increase in revenue.',
            'Built internal tools adopted by 5 engineers, reducing duplicated work and speeding up delivery by ~70%.',
            'Collaborated with globally distributed teams across 4 countries, reducing misalignment in requirements and rework by ~40% through improved communication workflows.',
            'Mentored engineers through code reviews and technical guidance, raising team standards.',
        ],
    },
    {
        position: 'PROGRAMMER',
        company: 'SL Agritech Corporation | Makati City, PH',
        duration: 'August 2022 - November 2023',
        // level: 'Junior',
        description: [
            'Led the development of an internal HR and applicant tracking system used by 100+ users, streamlining recruitment workflows and improving processing efficiency by ~60%.',
            'Improved UI/UX and performance across internal applications, increasing usability and reducing page load time by ~40%.',
            'Resolved critical production issues, reducing system downtime by ~70% and improving overall system reliability.',
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
