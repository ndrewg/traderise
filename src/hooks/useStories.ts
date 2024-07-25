import { useEffect, useState } from 'react';
import { Story } from '@/components/Stories/Stories';

export const useStories = () => {
  const [stories, setStories] = useState<Story[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchStories = async () => {
      try {
        const fetchedStories = (await import('@/components/Stories/mockdata'))
          .default;
        setTimeout(() => {
          setStories(fetchedStories);
          setIsLoading(false);
        }, 3000); // mimic actual loading
      } catch (error) {
        setError(new Error('404 Not Found'));
        setIsLoading(false);
      }
    };

    fetchStories();
  }, []);

  return { stories, isLoading, error };
};
