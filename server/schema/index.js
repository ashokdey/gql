const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} = graphQL;

// require the mongoose models
const BookModel = require('../models/BookModel');
const AuthorModel = require('../models/AuthorModel');

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


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: Author,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const author = new AuthorModel({
          name: args.name,
          age: args.age,
        });

        // save the user to database
        return author.save();
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})