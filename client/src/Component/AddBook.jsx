import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation, getAllBooks } from '../Queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: 0,
      genre: '',
      name: '',
    };
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, name, };
    });
  }

  onGnereChange = (e) => {
    const genre = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, genre, };
    });
  }

  onAuthorChange = (e) => {
    const authorId = e.target.value;
    this.setState((previousState, currentProps) => {
      return { ...previousState, authorId, };
    });
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getAllBooks }],
    });
    this.setState((previousState, currentProps) => {
      return {
        authorId: 0,
        genre: '',
        name: '',
      };
    })
  }

  render() {
    const { loading } = this.props.getAuthorsQuery;
    const { authors } = this.props.getAuthorsQuery;

    return (
      <form id="add-book" onSubmit={this.submit}>
        <div className="field">
          <label>Book Name: </label>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
        </div>

        <div className="field">
          <label>Gnere: </label>
          <input type="text" value={this.state.genre} onChange={this.onGnereChange} />
        </div>

        <div className="field">
          <label>Select Author: </label>
          <select value={this.state.authorId} disabled={loading} onChange={this.onAuthorChange}>
            <option value={0}>Select Author</option>
            {authors &&
              authors.length &&
              authors.map(author => (
                <option key={author.id} value={author.id}>{author.name}</option>
              ))}
          </select>
        </div>

        <button>Add Book</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" }),
)(AddBook);
