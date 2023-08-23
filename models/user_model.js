const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      first: { type: String, required: true, trim: true },
      last: { type: String, required: true, trim: true },
    },
    user_name: {type: String, required: true, unique: true, trim: true},
    age: { type: Number, required: true, min: 18 },
    icon: { type: String, default: 'add default icon' },
    role: { type: String, default: 'user' },
    cart: { type: Schema.Types.ObjectId, ref: 'Cart' },
    contact: { type: Schema.Types.ObjectId, ref: 'Contact_information' },
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
module.exports = {
  userModel,
  userSchema
};
