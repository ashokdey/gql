const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
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

// define root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: Book,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        // get data from database
        return booksDB.find(el => el.id === args.id);
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})