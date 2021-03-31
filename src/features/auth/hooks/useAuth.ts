import { useMeQuery } from 'generated/graphql';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuth = () => {
  const router = useRouter();
  const { data, loading } = useMeQuery();

  useEffect(() => {
    if (
      router.isReady &&
      !data?.me?.user &&
      !loading &&
      router.pathname !== '/signin' &&
      router.pathname !== '/signup'
    ) {
      router.replace('/signin');
    }
  }, [loading, data, router]);

  return {
    data,
    loading,
  };
};

export default useAuth;
