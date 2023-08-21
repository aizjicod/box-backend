const mongoose = require('mongoose');
const { itemSchema } = require('./item_model');
const { Schema } = mongoose;

const boxSchema = new Schema(
  {
   totalWeigh: {type: Number, required: true, min: 1},
   items_id: [ itemSchema ],
  }
);
const boxModel = mongoose.model('Box', boxSchema);
module.exports = {
  boxModel,
  boxSchema
};
