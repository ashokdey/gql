const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = graphQL;

// sample data
const booksDB = [
  { id: '12', name: 'The Final Empire', genre: 'Fantasy' },
  { id: '123', name: 'The Long Earth', genre: 'Sci-Fi' },
];

// define a book schema
const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

module.exports = {
  Book,
  booksDB,
}