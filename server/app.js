const express = require('express');
const graphQLHTTP = require('express-graphql');

const schema = require('./schema');
require('./db');
// Assign a port for the app to listen
const PORT = 3000;

const app = express();

// use the graphql middleware to accept ql queries
app.use('/ql', graphQLHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Running at: http://localhost:${PORT}`);
});