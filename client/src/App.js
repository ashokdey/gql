import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// custom imports
import BookList from './Component/BookList';
import AddBook from './Component/AddBook';

// Apollo Setup
const client = new ApolloClient({
  uri: 'http://localhost:5050/ql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Hello</h1>
          <BookList />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
