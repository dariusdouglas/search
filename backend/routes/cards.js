const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

router.get('/', async (req, res) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (err) {
    res.send('error');
  }
});

router.post('/', async (req, res) => {
  // commenting this out so that we dont create duplicates
  // only using this to add data to the database

  // const card = new Card({
  //   name: 'Summoned Skull',
  //   type: 'Normal Monster',
  //   atk: '3000',
  //   def: '1200',
  //   level: '6',
  //   race: 'Fiend',
  //   archetype: 'Archfiend',
  //   views: 0
  // });

  // card.save();
  res.json(card);
});

module.exports = router;
