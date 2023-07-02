const mongoose = require('mongoose')
const { Schema } = mongoose;

const boxSchema = new Schema(
  {
   totalWeigh: {type: Number, required: true, min: 1},
   items_id: [{ type: Schema.Types.ObjectId, ref: "Contact_information" }],
  }
);
const boxModel = mongoose.model('Box', boxSchema);
module.exports = boxModel;
