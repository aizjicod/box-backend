var boxModel = require('../../models/box_model');
const { assert } = require('chai');
describe('box model validations', function () {
    let newBox = {
      totalWeigh: 50
    }

    beforeEach(() => {
      newBox = {
        totalWeigh: 50
      }
    });

    it('should return correct with all values applied', function (done) {
      const i = new boxModel(newBox)
        i.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });

    it('should return error with totalWeigh being 0', async function () {
      const i = new boxModel({...newBox, totalWeigh: 0})
      assert.ifError(
        await i.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return error with totalWeigh being null', async function () {
      const i = new boxModel({...newBox, totalWeigh: null})
      assert.ifError(
        await i.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });
});
