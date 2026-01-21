import { IEducation } from '@/pages/api/personal/education';
import { createRequest } from '../utils/utils';

export const getEducation = async (): Promise<IEducation> => {
   return await createRequest<IEducation>('/api/personal/education');
};
