import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { theme } from './core/theme';
import { store } from './core/store';
import { Provider } from 'react-redux';
import { client } from './core/apollo';
import { GlobalStyle  } from './GlobalStyle';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import * as serviceWorker from './core/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
