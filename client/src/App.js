import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// custom imports
import BookList from './Component/BookList';

// Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:5050/gql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Hello</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
