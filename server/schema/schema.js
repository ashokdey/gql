const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
} = graphQL;

// sample data
const booksDB = [
  { id: '12', name: 'The Final Empire', genre: 'Fantasy' },
  { id: '123', name: 'The Long Earth', genre: 'Sci-Fi' },
];

const authorsDB = [
  { id: '21', name: 'Brandon Sanderson', age: 42 },
  { id: '213', name: 'Terry Pratchett', age: 66 },
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

// define a author schema
const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
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