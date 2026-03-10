import { ICertifications } from '@/pages/api/projects/certifications';
import { createRequest } from '../utils/utils';

export const getCertifications = async (): Promise<ICertifications[]> => {
    return await createRequest<ICertifications[]>(
        '/api/projects/certifications'
    );
};
