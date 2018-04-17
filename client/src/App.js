import React, { Component } from 'react';
import BookList from './Component/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
