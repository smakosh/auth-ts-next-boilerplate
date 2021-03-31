import { useApolloClient } from '@apollo/client';
import useAuth from 'features/auth/hooks/useAuth';
import { useLogoutMutation } from 'generated/graphql';
import { useRouter } from 'next/router';
import Button from 'ui/components/Button';
import Container from 'ui/components/Container';
import Loading from 'ui/components/Loading';
import Typography from 'ui/components/Typography';
import { withApollo } from 'utils/withApollo';

const Index = () => {
  const router = useRouter();
  const { data, loading } = useAuth();
  const [logout, { loading: logoutLoading }] = useLogoutMutation();
  const apolloClient = useApolloClient();

  if (loading || !data?.me?.user) {
    return <Loading />;
  }

  const handleLogout = async () => {
    const res = await logout();

    if (res.data?.logout.message) {
      apolloClient.cache.reset();
      router.push('/signin');
    }
  };

  return (
    <Container>
      <Typography as="h1" fontSize={42} align="center" fontWeight={700}>
        Welcome {data?.me.user.username}
      </Typography>
      <Button
        disabled={logoutLoading}
        title="Logout"
        type="button"
        variant="primary"
        size="large"
        onClick={handleLogout}
      />
    </Container>
  );
};

export default withApollo({ ssr: false })(Index);
