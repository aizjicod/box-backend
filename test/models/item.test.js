var { itemModel } = require('../../models/item_model');
const { assert } = require('chai');
describe('Item model validations', function () {
    let newItem = {
      quantity: 2,
      description: 'text..........',
      img: 'htpps://someurl'
    }

    beforeEach(() => {
      newItem = {
        quantity: 2,
        description: 'text..........',
        img: 'htpps://someurl'
      }
    });

    it('should return correct with all values applied', function (done) {
      const i = new itemModel(newItem)
        i.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });

    it('should return error with quantity being 0', async function () {
      const i = new itemModel({...newItem, quantity: 0})
      assert.ifError(
        await i.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return error with description being null', async function () {
      const i = new itemModel({...newItem, description: null})
      assert.ifError(
        await i.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return error with img being null', async function () {
      const i = new itemModel({...newItem, img: null})
      assert.ifError(
        await i.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return error with img being null', async function () {
      const i = new itemModel({...newItem, img: null})
      assert.ifError(
        await i.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });
});
