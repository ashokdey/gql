import { gql } from 'apollo-boost';

const getAllBooks = gql`
  {
    books {
      name
      id
    }
  }
`; // end of gql

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name,
      id
    }
  }
`;

export {
  getAllBooks,
  getAuthorsQuery,
  addBookMutation,
}
