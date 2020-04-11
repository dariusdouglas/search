const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  atk: {
    type: String,
    required: true
  },
  def: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  archetype: {
    type: String,
    require: true
  },
  image: [{ image: String, image_small: String }],
  views: {
    type: Number
  }
});

module.exports = Card = mongoose.model('card', CardSchema);
