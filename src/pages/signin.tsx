import Signin from 'features/auth/modules/Signin';
import { withApollo } from 'utils/withApollo';

const SigninPage = () => <Signin />;

export default withApollo({ ssr: false })(SigninPage);
