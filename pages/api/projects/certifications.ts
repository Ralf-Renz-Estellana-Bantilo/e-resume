import type { NextApiRequest, NextApiResponse } from 'next';

export interface ICertifications {
    id: number;
    name: string;
    issuingOrganization: string;
    issueDate: string;
    credentialId: string;
    credentialImgPath: string;
}

const certifications: ICertifications[] = [
    {
        id: 1,
        name: 'Frontend Developer (React)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Aug 2025',
        credentialId: '9ab43d216a27',
        credentialImgPath: 'Frontend Developer React Certificate',
    },
    {
        id: 2,
        name: 'JavaScript (Intermediate)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Sep 2023',
        credentialId: '059745683861',
        credentialImgPath: 'JavaScript Intermediate Certificate',
    },
    {
        id: 3,
        name: 'SQL (Intermediate)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Aug 2023',
        credentialId: '737b4894bf08',
        credentialImgPath: 'SQL Intermediate Certificate',
    },
    {
        id: 4,
        name: 'SQL (Basic)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Aug 2023',
        credentialId: '56c07ee1a206',
        credentialImgPath: 'SQL Basic Certificate',
    },
    {
        id: 5,
        name: 'React (Basic)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Jul 2023',
        credentialId: '532db1e992d6',
        credentialImgPath: 'React Basic Certificate',
    },
    {
        id: 6,
        name: 'JavaScript (Basic)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Jul 2023',
        credentialId: '3d0ad9d761b4',
        credentialImgPath: 'JavaScript Basic Certificate',
    },
    {
        id: 7,
        name: 'Problem Solving (Basic)',
        issuingOrganization: 'HackerRank',
        issueDate: 'Jul 2023',
        credentialId: 'fe457bb2912e',
        credentialImgPath: 'Problem Solving Certificate',
    },
];

export const CREDENTIAL_URL = 'https://www.hackerrank.com/certificates';
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ICertifications[]>
) {
    res.status(200).json(certifications);
}
