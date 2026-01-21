import { ISkills } from '@/pages/api/skills';
import { createRequest } from '../utils/utils';

export const getSkills = async (): Promise<ISkills[]> => {
   return await createRequest<ISkills[]>('/api/skills');
};
