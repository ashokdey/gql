const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
} = graphQL;

const {
  Book,
  booksDB,
} = require('./Book');

const {
  Author,
  authorsDB,
} = require('./Author');

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
    },
    author: {
      type: Author,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return authorsDB.find(el => el.id === args.id);
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})