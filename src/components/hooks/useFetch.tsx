import { useState, useEffect } from 'react';

export const useFetch = <T,>(url: string, onSuccess: (res: T) => void) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        if (onSuccess) onSuccess(json);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        setError('Something went Wrong');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [onSuccess, url]);

  return { data, loading, error };
};
