import Container from '@/pages/components/Container';
import Image from 'next/image';
import React from 'react';

export interface ICertifications {
    id: number;
    name: string;
    issuingOrganization: string;
    issueDate: string;
    credentialId: string;
    credentialImgPath: string;
}

const CREDENTIAL_URL = 'https://www.hackerrank.com/certificates';

const Certifications = () => {
    const CERTIFICATIONS: ICertifications[] = [
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

    const onPreviewCertificate = (credentialId: string) => {
        const fileUrl = `${CREDENTIAL_URL}/${credentialId}`;

        window.open(fileUrl, '_blank');
    };

    return (
        <Container title="CERTIFICATIONS">
            <div className="flex flex-wrap justify-center gap-2">
                {CERTIFICATIONS.map((cert) => (
                    <div
                        className="flex flex-col h-auto bg-opacity-10 gap-1 p-2 border-1 border-slate-700 bg-slate-500 rounded-lg w-[49%] sm-breakpoint:w-[90%]"
                        key={cert.id}
                    >
                        <div className="flex w-full h-[160px] border-1 border-slate-700 rounded-lg overflow-hidden cursor-pointer">
                            <Image
                                className="object-fit h-[160px]"
                                src={require(
                                    `@/assets/Images/Certifications/${cert.credentialImgPath}.png`
                                )}
                                onClick={() =>
                                    onPreviewCertificate(cert.credentialId)
                                }
                                alt={cert.name}
                                key={cert.credentialId}
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold text-center text-accent-primary">
                                {cert.name}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <small className="text-left text-accent-secondary">
                                    Issuing organization
                                </small>
                                <small className="font-semibold text-left text-accent-primary">
                                    {cert.issuingOrganization}
                                </small>
                            </div>
                            <div className="flex items-center justify-between">
                                <small className="text-left text-accent-secondary">
                                    Issue date
                                </small>
                                <small className="font-semibold text-left text-accent-primary">
                                    {cert.issueDate}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default Certifications;
