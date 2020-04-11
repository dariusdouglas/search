const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

router.get('/', async (req, res) => {
  try {
    // get all cards
    const cards = await Card.find({});

    // return cards in response as JSON
    res.json(cards);
  } catch (err) {
    res.send('error');
  }
});

router.get('/most-viewed', async (req, res) => {
  try {
    // get most viewed card query
    const mostViewedCard = await Card.find({})
      .sort({ views: -1 }) // sort in descending order
      .limit(1); // return only one

    // return most viewed card in response as JSON
    res.json(mostViewedCard);
  } catch (err) {
    res.send('error');
  }
});

router.get('/:cardName', async (req, res) => {
  try {
    const currentCard = await Card.findOneAndUpdate(
      { name: req.params.cardName },
      { $inc: { views: 1 } } // increments views by one
    );

    // return current card in response as JSON
    res.json(currentCard);
  } catch (err) {
    res.send('err');
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
