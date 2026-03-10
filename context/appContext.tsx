import React, { createContext, useEffect, useState } from 'react';
import { getEducation } from '../controller/personal/education';
import { getExperiences } from '../controller/personal/experiences';
import { getServices } from '../controller/projects/services';
import { getProjects } from '../controller/projects/projects';
import { getTimeline } from '../controller/others/timeline';
import { getSkills } from '../controller/skills/skills';
import { IEducation } from '@/pages/api/personal/education';
import { IExperience } from '@/pages/api/personal/experiences';
import { IServices } from '@/pages/api/projects/services';
import { IProjects } from '@/pages/api/projects';
import { IQualification } from '@/pages/api/others/qualifications';
import { ITimeline } from '@/pages/api/others/timeline';
import { ISkills } from '@/pages/api/skills';
import { getQualifications } from '@/controller/others/qualifications';
import { getCertifications } from '@/controller/projects/certifications';
import { ICertifications } from '@/pages/api/projects/certifications';

interface ContextValue {
    education: IEducation;
    experiences: IExperience[];
    services: IServices[];
    projects: IProjects[];
    qualifications: IQualification[];
    timeline: ITimeline[];
    skills: ISkills[];
    certifications: ICertifications[];
}

const DEFAULT_VALUE: ContextValue = {
    education: {
        course: '',
        university: '',
        location: '',
        pointers: [],
    },
    experiences: [],
    services: [],
    projects: [],
    qualifications: [],
    timeline: [],
    skills: [],
    certifications: [],
};

export const AppContext = createContext<ContextValue>(DEFAULT_VALUE);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = useState<ContextValue>(DEFAULT_VALUE);

    const initialize = async () => {
        const [
            education,
            experiences,
            services,
            projects,
            qualifications,
            timeline,
            skills,
            certifications,
        ] = await Promise.all([
            getEducation(),
            getExperiences(),
            getServices(),
            getProjects(),
            getQualifications(),
            getTimeline(),
            getSkills(),
            getCertifications(),
        ]);

        setValue({
            education,
            experiences,
            services,
            projects,
            qualifications,
            timeline,
            skills,
            certifications,
        });
    };

    useEffect(() => {
        (async () => {
            await initialize();
        })();
    }, []);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
