import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import 'isomorphic-fetch';
import { createWithApollo } from './createWithApollo';
import { SERVER_URL } from 'config';

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: `${SERVER_URL}/api` as string,
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          keyFields: ['id'],
        },
        Mutation: {
          keyFields: ['id'],
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);
