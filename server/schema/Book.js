const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphQL;

const {
  Author,
  authorsDB,
} = require('./Author');

// sample data
const booksDB = [
  { id: '12', name: 'The Final Empire', genre: 'Fantasy', authorId: '21' },
  { id: '123', name: 'The Long Earth', genre: 'Sci-Fi', authorId: '213' },
];

// define a book schema
const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: Author,
      resolve(parent, args) {
        return authorsDB.find(el => el.id === parent.authorId);
      }
    }
  }),
});

module.exports = {
  Book,
  booksDB,
}