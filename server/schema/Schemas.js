const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
} = graphQL;

// sample data
const booksDB = [
  { id: '12', name: 'The Final Empire', genre: 'Fantasy', authorId: '21' },
  { id: '123', name: 'The Long Earth', genre: 'Sci-Fi', authorId: '213' },
  { id: '123', name: 'The Hero of Ages', genre: 'Sci-Fi', authorId: '21' },
  { id: '123', name: 'The Color of Magic', genre: 'Sci-Fi', authorId: '213' },
  { id: '123', name: 'The Light Fantastic', genre: 'Sci-Fi', authorId: '213' },
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
    author: {
      type: Author,
      resolve(parent, args) {
        return authorsDB.find(el => el.id === parent.authorId);
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
        return booksDB.filter(el => el.authorId === parent.id);
      }
    },
  }),
});

module.exports = {
  Book,
  Author,
  authorsDB,
  booksDB,
};