const mongoose = require('mongoose')
const { Schema } = mongoose;
const { Box } = require('./box_model')

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
      addItem(id){
        const item = Box.findById(id)
        if(item) this.boxes.push(item) 
        return {error: "this items doesn't exist"}
      }
    },
  },
);
const cartModel = mongoose.model('Cart', cartSchema);
module.exports = cartModel;
