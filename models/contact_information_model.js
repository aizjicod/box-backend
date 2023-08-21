const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactInformationSchema = new Schema(
  {
    telephone_n: { type: String, required: false, default: '0'},
    email: { type: String, unique: true, trim: true, default: 'test@test.com' },
    city: { type: String, trim: true }
  },
  {
    timestamps: false
  }
);
const contactInformationModel = mongoose.model('Contact_information', contactInformationSchema);
module.exports = {
  contactInformationModel,
  contactInformationSchema
};
