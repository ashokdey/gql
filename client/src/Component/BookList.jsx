import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getAllBooks } from '../Queries';
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
          {(books && books.length) ?
            books.map(book => <li key={book.id}>{book.name}</li>) : 'Add a new book'}
        </ul>
      </div>
    );
  }
}

export default graphql(getAllBooks)(BookList);
