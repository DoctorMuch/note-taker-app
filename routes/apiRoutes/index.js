const uniqid = require('uniqid');
const router = require('express').Router();
const { filterByQuery, findById, makeNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

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