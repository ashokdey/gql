const graphQL = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = graphQL;

// dummy data
const authorsDB = [
  { id: '21', name: 'Brandon Sanderson', age: 42 },
  { id: '213', name: 'Terry Pratchett', age: 66 },
];

// define a author schema
const Author = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

module.exports = {
  Author,
  authorsDB,
}
