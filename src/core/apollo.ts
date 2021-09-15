import { store } from './store';
import { setAuthData } from './mainReducer';
import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://hiring-backend-2048.herokuapp.com/admin/api',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.localStorage.getItem('token')!;
  const userName = window.localStorage.getItem('userName')!;
  store.dispatch(setAuthData({ token, userName }))
  if (token) {
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      },
    });
  }
  return forward(operation);
});

export const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache(),
});