const mongoose = require('mongoose')
const { Schema } = mongoose;
const { boxSchema } = require('./box_model')

const cartSchema = new Schema(
  {
    boxes: [ boxSchema ],
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
module.exports = {
  cartModel,
  cartSchema
};
