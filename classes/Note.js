const { 
  readFromFile, 
  writeToFile, 
} = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// make the Note class
class Note {
  // define methods that will manipulate the notes collection
  // write note
  write(note) {
    return writeToFile('db/db.json', JSON.stringify(note));
  }
  // read note
  read() {
    return readFromFile('db/db.json', 'utf8');
  }
  // get note
  getAll() {
    return this.read()
    .then((content) => {
      let allContent;
      try {
        allContent = [].concat(JSON.parse(content));
      } catch (err) {
        allContent = [];
      }

      return allContent;
    });
  }
    // new note
  new(note) {
    const { title, text } = note;
    const newNote = { title, text, id: uuidv4() };
    return this.getAll()
    .then((allNotes) => [...allNotes, newNote])
    .then((addedNotes) => this.write(addedNotes))
    .then(() => newNote);
  }
  // delete note
  delete(id) {
    return this.getAll()
    .then((allContent) => allContent.filter((allContent) => allContent.id !== id))
    .then((selectNote) => this.write(selectNote));
  }
}

// export Note class to be used elsewhere
module.exports = new Note();