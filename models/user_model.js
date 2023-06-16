const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },
    age: { type: Number, required: true, min: 18 },
    /*
    ** passport, ci country, number, icon and email  will be left here for future implementations
    ** passport: { type: String, required: false, unique: true },
    ** CI: { type: String, required: false, unique: true },
    ** email: { type: String, required: true },
    ** country: { type: String, required: true, unique: true },
    ** number: { type: Number, required: true, unique: true },
    ** icon: { type: String, required: false, default: 'asdasd' },
    */
    role: { type: String, default: 'user' },
    cart: { type: Schema.Types.ObjectId, ref: "Cart" }
  },
  {
    methods: {
      getFullName() {
        return `${this.name.first} ${this.name.last}`;
      },
      isAdmin() {
        return this.role.toLowerCase() === 'admin';
      },
    },
  },
  {
    timestamps: true
  }
);
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
