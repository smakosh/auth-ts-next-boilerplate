import Signup from 'features/auth/modules/Signup';
import { withApollo } from 'utils/withApollo';

const SignupPage = () => <Signup />;

export default withApollo({ ssr: false })(SignupPage);
