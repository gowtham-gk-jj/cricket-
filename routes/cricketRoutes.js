const express = require('express');
const router = express.Router();

// In-memory cricket data
let matches = [
  {
    id: 1,
    teams: ["India", "Pakistan"],
    scores: ["245/7", "200/10"],
    result: "India Won"
  },
  {
    id: 2,
    teams: ["Australia", "England"],
    scores: ["280/6", "279/9"],
    result: "Australia Won"
  }
];

router.get('/', (req, res) => {
  res.json(matches);
})

router.post('/', (req, res) => {
  console.log("POST BODY:", req.body);

  const newMatch = req.body;

  if (!newMatch || !newMatch.id) {
    return res.status(400).json({ message: "Invalid match data" });
  }

  matches.push(newMatch);

  res.status(201).json({
    message: "Match added successfully",
    matches
  });
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  matches = matches.filter(match => match.id !== id);

  res.json({
    message: "Match deleted successfully",
    matches
  });
});

module.exports = router;
