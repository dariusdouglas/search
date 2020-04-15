const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

router.get('/', async (req, res) => {
  const cart = await Cart.find({});
  res.json(cart);
});

//return quantity based on id
router.get('/:id/quantity', async (req, res) => {
  try {
    const cart = await Cart.findOne({
      _id: '5e96748c92fc6fb85183d2b4'
    });

    const cartItem = cart.item.find(element => {
      return element.cardItemId === req.params.id;
    });

    if (cartItem) {
      res.json(cartItem.quantity);
    } else {
      res.json(0);
    }
  } catch (err) {
    res.send(err);
  }
});

router.post('/', async (req, res) => {
  //used to post cart items to the database through postman
  //   const cartItem = new Cart({
  //     item: [
  //       {
  //         cardItemId: "5e8fc63a98530d1f781a2313",
  //         quantity: 2
  //       },
  //       {
  //         cardItemId: "5e8ff6b1f800e0211648fb57",
  //         quantity: 5
  //       }
  //     ]
  //   });

  //   cartItem.save();
  //   res.json(cartItem);

  //userID: 5e96748c92fc6fb85183d2b4
  const cart = await Cart.findOne({ _id: '5e96748c92fc6fb85183d2b4' });

  if (cart) {
    const cartItem = cart.item.find(element => {
      return element.cardItemId === req.body.cardItemId;
    });

    if (cartItem) {
      cartItem.quantity += req.body.quantity;

      cart.save();
      res.sendStatus(200);
    } else {
      const newCartItem = {
        cardItemId: req.body.cardItemId,
        quantity: req.body.quantity
      };
      cart.item.push(newCartItem);
      cart.save();
    }
  } else {
    //user doesn't exist so add user to cart later
  }
});

module.exports = router;
