const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  item: [
    {
      cardItemId: String,
      quantity: Number
    }
  ]
});

module.exports = Cart = mongoose.model("cart", cartSchema);
