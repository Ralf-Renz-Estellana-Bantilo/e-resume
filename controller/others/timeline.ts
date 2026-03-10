import { ITimeline } from '@/pages/api/others/timeline';
import { createRequest } from '../utils/utils';

export const getTimeline = async (): Promise<ITimeline[]> => {
   return await createRequest<ITimeline[]>('/api/others/timeline');
};
