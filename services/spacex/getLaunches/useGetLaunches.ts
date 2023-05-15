import { useEffect, useState } from 'react';
import { getLaunches } from './getLaunches';
import { LaunchPaginatedResponse, LaunchRequest } from './types';

export const useGetLaunches = (
  request: LaunchRequest = {
    query: {},
    options: {
      populate: ['payloads'],
      limit: 10,
    },
  }
) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<LaunchPaginatedResponse | null>(null);

  useEffect(() => {
    const makeRequest = async () => {
      setLoading(true);
      try {
        const response = await getLaunches(request);
        setData(response);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };

    makeRequest();
  }, [request]);

  return {
    loading,
    error,
    data,
  };
};
