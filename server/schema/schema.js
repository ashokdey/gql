const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
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