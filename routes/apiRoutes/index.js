const uniqid = require('uniqid');
const router = require('express').Router();
const { query } = require('express');

const { notes } = require('../../db/db.json');

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
  return note;
};

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query); {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  res.json(result);
});

router.post('/notes', (req, res) => {
  req.body.id = uniqid('dfm-');
  const note = makeNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  req.params.id
})

module.exports = router;