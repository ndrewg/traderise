import { useEffect, useState } from 'react';
import { Post } from '@/components/Feed/Feed';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = (await import('@/components/Feed/mockdata'))
          .default as Post[];

        setPosts(posts);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, loading, error };
};
