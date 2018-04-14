const express = require('express');
const graphQLHTTP = require('express-graphql');

// Assign a port for the app to listen
const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`Running at: http://localhost:${PORT}`);
});