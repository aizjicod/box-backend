import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    boxes: [{
      type: Schema.Types.ObjectId,
      ref: "Box"

      // this is the structure for complex implementation
      // added: {
      //   type: [Schema.Types.ObjectId], 
      //   ref: "Item"
      // },
      // bought: {
      //   type: [Schema.Types.ObjectId], 
      //   ref: "Item"
      // }
    }],
  },
  {
    methods: {
      getItems() {
        return this.boxes.sort(a,b => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      },
    },
  },
);
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
