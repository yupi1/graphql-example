import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as store from './store';

const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <Provider {...store}>
        <ApolloProvider client={client}>
            <App /> 
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);