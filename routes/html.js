// import express
const html = require('express').Router();
// import path
const path = require('path');

// The following HTML routes should be created:
// GET /notes should return the notes.html file.
html.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});
// GET * should return the index.html file.
html.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// export data through router
module.exports = html;