import useAppContext from '@/hooks/useAppContext';
import { CREDENTIAL_URL } from '@/pages/api/projects/certifications';
import Container from '@/pages/components/Container';
import Image from 'next/image';
import React from 'react';

const Certifications = () => {
    const { certifications } = useAppContext();

    const onPreviewCertificate = (credentialId: string) => {
        const fileUrl = `${CREDENTIAL_URL}/${credentialId}`;

        window.open(fileUrl, '_blank');
    };

    return (
        <Container title="CERTIFICATIONS">
            <div className="flex flex-wrap justify-center gap-2">
                {certifications.map((cert) => (
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
