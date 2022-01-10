const { query } = require('express');
const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.title) {
    filteredResults = filteredResults.filter(note => note.title === query.title);
  }
  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === query.id)[0];
  return result;
};

function makeNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notes }, null, 2)
  );
  return note;
};

module.exports = {
  filterByQuery,
  findById,
  makeNote
};