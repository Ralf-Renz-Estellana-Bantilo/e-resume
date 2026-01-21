import { IServices } from '@/pages/api/projects/services';
import { createRequest } from '../utils/utils';

export const getServices = async (): Promise<IServices[]> => {
   return await createRequest<IServices[]>('/api/projects/services');
};
