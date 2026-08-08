import { NextApiRequest, NextApiResponse } from 'next';

export interface IEducation {
    course: string;
    university: string;
    location: string;
    duration: string;
    pointers: string[];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IEducation>
) {
    return res.status(200).json({
        course: 'BS INFORMATION TECHNOLOGY',
        university: 'University of Eastern Philippines',
        location: 'Northern Samar, PH',
        duration: 'August 2018 - June 2022',
        pointers: [
            'Graduated Cum Laude',
            'Spent most of my college time building software applications and doing graphic designs.',
        ],
    });
}
