const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
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
        return BookModel.findById(args.id);
      }
    },
    books: {
      type: new GraphQLList(Book),
      resolve(parent, args) {
        return BookModel.find();
      },
    },
    author: {
      type: Author,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return AuthorModel.findById(args.id);
      }
    },
    authors: {
      type: new GraphQLList(Author),
      resolve(parent, args) {
        return AuthorModel.find();
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
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
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
    addBook: {
      type: Book,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const newBook = new BookModel({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });

        return newBook.save();
      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})