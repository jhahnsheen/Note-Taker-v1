// import express
const express = require('express');
// import path
const path = require('path');
// import clog from middleware
const { clog } = require('./middleware/clog');
// use routes folder
const routes = require('./routes');

// create port, either at the location specified or 3001 by default
const PORT = process.env.PORT || 3001
// initialize express
const app = express();

// initialize middleware for parsing JSON
app.use(express.json());
// initialize middleware for parsing urlencoded form data
app.use(express.urlencoded({ extended: true }));
// initialize middleware for static files in public folder
app.use(express.static(path.join(__dirname, 'public')));
// initialize clog middleware to log paths
app.use(clog);

app.use(routes);

// start server at port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);