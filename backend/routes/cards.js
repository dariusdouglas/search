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

router.get('/most-viewed/:num', async (req, res) => {
  try {
    const numCardsToRetrieve = parseInt(req.params.num);

    // get most viewed card(s) query
    const mostViewedCard = await Card.find({})
      .sort({ views: -1 }) // sort in descending order
      .limit(numCardsToRetrieve); // return specified amount of cards

    // return most viewed card in response as JSON
    res.json(mostViewedCard);
  } catch (err) {
    res.send(err);
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

// only using this to add data to the database
// maybe use this to make a form later
router.post('/', async (req, res) => {
  try {
    // data for a new card if no new card info is included in request
    const newCard = new Card({
      name: 'Summoned Skull',
      type: 'Normal Monster',
      atk: '3000',
      def: '1200',
      level: '6',
      race: 'Fiend',
      archetype: 'Archfiend',
      images: [
        {
          image: '',
          image_small: ''
        }
      ],
      views: 0
    });

    // if no name in request, use newCard name
    const name = req.body.name ? req.body.name : newCard.name;

    // check if card with name currently exists
    const card = await Card.find({ name: name });

    // if the card does not exist, don't add it
    if (!card) {
      // save the card to the database
      card.save();
    } else {
      res.send('exists');
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
