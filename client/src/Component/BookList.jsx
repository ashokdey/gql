import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAllBooks = gql`
  {
    books {
      name
      id
    }
  }
`; // end of gql

class BookList extends Component {
  render() {
    const { loading } = this.props.data;
    const { books } = this.props.data;

    if (loading) {
      return (
        <div>
          <h1>Loading....</h1>
        </div>
      );
    }
    return (
      <div className="App">
        <ul id="book-list">
          {books &&
            books.length &&
            books.map(book => <li key={book.id}>{book.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default graphql(getAllBooks)(BookList);
