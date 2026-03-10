import { IExperience } from '@/pages/api/personal/experiences';
import { createRequest } from '../utils/utils';

export const getExperiences = async (): Promise<IExperience[]> => {
   return await createRequest<IExperience[]>('/api/personal/experiences');
};
