
const mongoose = require('mongoose')
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    quantity: { type: Number, required: true, min: 1 },
    description: { type: String, trim: true, required: true },
    img: { type: String, trim: true, required: true }
  },
  {
    timestamps: true
  }
);
const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;
