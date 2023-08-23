const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactInformationSchema = new Schema(
  {
    telephone_n: { type: String, required: false, default: '0'},
    email: { type: String, index: { unique: true, sparse: true } },
    city: { type: String, trim: true }
  },
  {
    timestamps: false
  }
);
const contactInformationModel = mongoose.model('Contact', contactInformationSchema);
module.exports = {
  contactInformationModel,
  contactInformationSchema
};
