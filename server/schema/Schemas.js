const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = graphQL;

// require the mongoose models
const BookModel = require('../models/BookModel');
const AuthorModel = require('../models/AuthorModel');

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
        return AuthorModel.findById(parent.authorId);
      }
    }
  }),
});

// define a author schema
const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(Book),
      resolve(parent, args) {
        // using filter to get list of all books matched
        return BookModel.find({ authorId: parent.id });
      }
    },
  }),
});

module.exports = {
  Book,
  Author,
};