// import express
const api = require('express').Router();
// import class Note
const Note = require('../classes/Note');

// The following API routes should be created:
// GET /api/notes should read the db.json file and return all saved notes as JSON.
api.get('/notes', (req, res) => {
  Note
  .read()
  .then((notes) => {
    return res.json(JSON.parse(notes));
  });
});
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
api.post('/notes', (req, res) => {
  Note
  .new(req.body)
  .then((newNote) => {
    res.json(newNote)
  });
});
// DELETE /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
api.delete('/notes/:id', (req, res) => {
  Note
  .delete(req.params.id)
  .then(() => res.json({ ok: true }));
});

// allow exporting through router
module.exports = api;