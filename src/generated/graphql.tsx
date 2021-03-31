import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
};

export type FormError = {
  __typename?: 'FormError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: UserResponse;
  signin: UserResponse;
  logout: UserResponse;
  requestResetToken: ResetPasswordResponse;
  resetPassword: ResetPasswordResponse;
};

export type MutationSignupArgs = {
  params: UserSignUpInput;
};

export type MutationSigninArgs = {
  params: UserSignInInput;
};

export type MutationRequestResetTokenArgs = {
  params: RequestTokenLinkInput;
};

export type MutationResetPasswordArgs = {
  params: ResetPasswordInput;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<UserResponse>;
  getUser?: Maybe<UserResponse>;
};

export type QueryGetUserArgs = {
  params: UserGetInput;
};

export type RequestTokenLinkInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPasswordRequest = {
  __typename?: 'ResetPasswordRequest';
  id: Scalars['ID'];
  token: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  expired: Scalars['Boolean'];
  consumed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  token?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<FormError>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  userType: UserType;
  emailVerifiedAt?: Maybe<Scalars['DateTime']>;
  refreshToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<ResetPasswordRequest>>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type UserGetInput = {
  id: Scalars['ID'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FormError>>;
  user?: Maybe<User>;
  message?: Maybe<Scalars['String']>;
};

export type UserSignInInput = {
  email: Scalars['Email'];
  password: Scalars['String'];
};

export type UserSignUpInput = {
  email: Scalars['Email'];
  username: Scalars['String'];
  password: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export enum UserType {
  AdminUser = 'ADMIN_USER',
  BetaUser = 'BETA_USER',
  NormalUser = 'NORMAL_USER',
}

export type UserResponseFragmentFragment = {
  __typename?: 'UserResponse';
} & Pick<UserResponse, 'message'> & {
    errors?: Maybe<
      Array<{ __typename?: 'FormError' } & Pick<FormError, 'field' | 'message'>>
    >;
    user?: Maybe<
      { __typename?: 'User' } & Pick<User, 'id' | 'email' | 'username'>
    >;
  };

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation' } & {
  logout: { __typename?: 'UserResponse' } & UserResponseFragmentFragment;
};

export type SigninMutationVariables = Exact<{
  params: UserSignInInput;
}>;

export type SigninMutation = { __typename?: 'Mutation' } & {
  signin: { __typename?: 'UserResponse' } & UserResponseFragmentFragment;
};

export type SignupMutationVariables = Exact<{
  params: UserSignUpInput;
}>;

export type SignupMutation = { __typename?: 'Mutation' } & {
  signup: { __typename?: 'UserResponse' } & UserResponseFragmentFragment;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me?: Maybe<{ __typename?: 'UserResponse' } & UserResponseFragmentFragment>;
};

export const UserResponseFragmentFragmentDoc = gql`
  fragment UserResponseFragment on UserResponse {
    errors {
      field
      message
    }
    message
    user {
      id
      email
      username
    }
  }
`;
export const LogoutDocument = gql`
  mutation logout {
    logout {
      ...UserResponseFragment
    }
  }
  ${UserResponseFragmentFragmentDoc}
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const SigninDocument = gql`
  mutation Signin($params: UserSignInInput!) {
    signin(params: $params) {
      ...UserResponseFragment
    }
  }
  ${UserResponseFragmentFragmentDoc}
`;
export type SigninMutationFn = Apollo.MutationFunction<
  SigninMutation,
  SigninMutationVariables
>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useSigninMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SigninMutation,
    SigninMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SigninMutation, SigninMutationVariables>(
    SigninDocument,
    options
  );
}
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<
  SigninMutation,
  SigninMutationVariables
>;
export const SignupDocument = gql`
  mutation Signup($params: UserSignUpInput!) {
    signup(params: $params) {
      ...UserResponseFragment
    }
  }
  ${UserResponseFragmentFragmentDoc}
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>;
export const MeDocument = gql`
  query Me {
    me {
      ...UserResponseFragment
    }
  }
  ${UserResponseFragmentFragmentDoc}
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
