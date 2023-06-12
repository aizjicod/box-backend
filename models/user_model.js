import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    age: {type: Number, required: true, min: 18 },
    icon: { type: String, required: false, default: 'asdasd' },
    passport: { type: String, required: false, unique: true },
    CI: { type: String, required: false, unique: true },
    country: { type: String, required: true, unique: true },
    number: { type: Number, required: true, unique: true },
    role: String,
    // add box model schema here
    cart: { boxes: [Object], index: true }
  },
  {
    methods: {
      getFullName() {
        return `${this.name.first} ${this.name.last}`;
      },
    },
  },
  {
    timestamps: true
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;
