import { IQualification } from '@/pages/api/others/qualifications';
import { createRequest } from '../utils/utils';

export const getQualifications = async (): Promise<IQualification[]> => {
   return await createRequest<IQualification[]>('/api/others/qualifications');
};
