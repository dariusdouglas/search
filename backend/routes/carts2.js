const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

router.post('/create', async (req, res) => {
  // create new card object matching schema
  const newCard = new Card({
    name: req.body.name,
    type: req.body.type,
    atk: req.body.atk,
    def: req.body.def,
    level: req.body.level,
    race: req.body.race,
    archetype: req.body.archetype
  });

  try {
    const card = await Card.findOne({ name: newCard.name });

    if (!card) {
      newCard.save();
      res.json(newCard);
    } else {
      res.send('exists');
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
