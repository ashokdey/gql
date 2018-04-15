const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphQL;

const {
  Book,
  booksDB,
  Author,
  authorsDB,
} = require('./Schemas');


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
    books: {
      type: new GraphQLList(Book),
      resolve(parent, args) {
        return booksDB;
      },
    },
    author: {
      type: Author,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return authorsDB.find(el => el.id === args.id);
      }
    },
    authors: {
      type: new GraphQLList(Author),
      resolve(parent, args) {
        return authorsDB;
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
})