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
  mutation{
    addBook(name: "", genre: "", authorId: "") {
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
