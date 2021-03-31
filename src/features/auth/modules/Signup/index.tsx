import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import Layout from 'features/auth/components/Layout';
import Button from 'ui/components/Button';
import InputField from 'ui/components/InputField';
import { MeDocument, useSignupMutation } from 'generated/graphql';
import handleErrors from 'helpers/handleErrors';

const Signup = () => {
  const router = useRouter();
  const [signup] = useSignupMutation();

  return (
    <Layout>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        })}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          const res = await signup({
            variables: {
              params: {
                email: values.email,
                username: values.username,
                password: values.password,
              },
            },
            awaitRefetchQueries: true,
            refetchQueries: [
              {
                query: MeDocument,
              },
            ],
          });

          if (res.data?.signup.errors) {
            setErrors(handleErrors(res.data.signup.errors));
            setSubmitting(false);
          } else if (res.data?.signup.user) {
            router.push('/');
          }
        }}
      >
        {() => (
          <Form>
            <InputField name="username" label="Username" type="text" />
            <InputField name="email" label="Email" type="email" />
            <InputField name="password" label="Password" type="password" />
            <Button
              title="Sign Up"
              variant="primary"
              size="large"
              type="submit"
            />
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Signup;
