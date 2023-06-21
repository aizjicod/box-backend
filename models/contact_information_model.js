const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactInformationSchema = new Schema(
  {
    telephone_n: { type: String, unique: true },
    email: { type: String, unique: true, trim: true },
    city: { type: String, trim: true }
  },
  {
    timestamps: false
  }
);
const contactInformationModel = mongoose.model('Contact_information', contactInformationSchema);
module.exports = contactInformationModel;
