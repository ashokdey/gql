const express = require('express');
const cors = require('cors');
const graphQLHTTP = require('express-graphql');

const schema = require('./schema');
require('./db');
// Assign a port for the app to listen
const PORT = 5050;
const app = express();

// allow CORS
app.use(cors());
// use the graphql middleware to accept ql queries
app.use('/ql', graphQLHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Running at: http://localhost:${PORT}`);
});