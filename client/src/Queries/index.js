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

export {
  getAllBooks,
  getAuthorsQuery,
}
