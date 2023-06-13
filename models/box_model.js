import mongoose from 'mongoose';
const { Schema } = mongoose;

const boxSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
  },
);
const Box = mongoose.model('Box', boxSchema);
module.exports = Box;
