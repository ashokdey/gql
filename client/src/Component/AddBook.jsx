import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
  render() {
    const { loading } = this.props.data;
    const { authors } = this.props.data;

    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name: </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Gnere: </label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Select Author: </label>
          <select disabled={loading}>
            <option>Select Author</option>
            {authors &&
              authors.length &&
              authors.map(author => (
                <option value={author.id}>{author.name}</option>
              ))}
          </select>
        </div>

        <button>Add Book</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
