import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';
import { BASE_URL } from '../env';

const httpLink = createHttpLink({
  uri: `https://cors-anywhere.herokuapp.com/${BASE_URL}`,
});

const corsLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'x-requested-with': 'cors-anywhere',
    },
  });
  return forward(operation);
});

export const client = new ApolloClient({
  link: corsLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const INTRODUCE_SESSION = gql`
  mutation {
    introduceSession {
      id
      expiresAt
      addresses {
        address
      }
    }
  }
`;

export const GET_MAILS = gql`
  query Session($id: ID!) {
    session(id: $id) {
      mails {
        id
        fromAddr
        text
        headerSubject
      }
    }
  }
`;
