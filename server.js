// import express
const express = require('express');
// create port, either at the location specified or 3001 by default
const PORT = process.env.PORT || 3001
// initialize express
const app = express();

// initialize middleware for parsing JSON
app.use(express.json());
// initialize middleware for parsing urlencoded form data
app.use(express.urlencoded({ extended: true }));
// initialize middleware for static files in public folder
app.use(express.static('public'));

// start server at port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);