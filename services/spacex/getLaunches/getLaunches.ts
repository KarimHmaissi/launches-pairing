import { http } from '../client';
import { LaunchPaginatedResponse, LaunchRequest } from './types';

export async function getLaunches(request: LaunchRequest) {
  const response = await http.post<LaunchPaginatedResponse>('/launches/query', request);
  return response.data;
}
