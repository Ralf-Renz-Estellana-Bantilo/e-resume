import { IProjects } from '@/pages/api/projects';
import { createRequest } from '../utils/utils';

export const getProjects = async (): Promise<IProjects[]> => {
   return await createRequest<IProjects[]>('/api/projects');
};
