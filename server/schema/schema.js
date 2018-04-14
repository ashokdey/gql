const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphQL;

// define a book schema
const Book = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
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
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        // get data from database
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})