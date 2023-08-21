var { userModel } = require('../../models/user_model');
const { assert } = require('chai');
describe('User model validations', function () {
    let newUser = {
      name: {
        first: 'Alejandro Jose',
        last: 'Torres Valero',
      },
      user_name: 'Aiziji',
      age: 19,
    }

    beforeEach(() => {
      newUser = {
        name: {
          first: 'Alejandro Jose',
          last: 'Torres Valero',
        },
        user_name: 'Aiziji',
        age: 19,
      }
    });

    it('should return correct with all values applied', function (done) {
      const u = new userModel(newUser)
        u.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });

    it('should return an error with age being less than 18', async function () {
      const u = new userModel({...newUser, age: 15})
      assert.ifError(
        await u.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return an error with age being a string', async function () {
      const u = new userModel({...newUser, age: '15'})
      assert.ifError(
        await u.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return an error with first name being null', async function () {
      const u = new userModel({...newUser, name: {first: null , last: 'Torres Valero'}})
      assert.ifError(
        await u.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return an error with last name being undefined', async function () {
      const u = new userModel({...newUser, name: {first: 'Alejandro Jose' , last: undefined}})
      assert.ifError(
        await u.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return an error with user_name name being undefined', async function () {
      const u = new userModel({...newUser, user_name: undefined})
      assert.ifError(
        await u.validate()
        .then(res => `it should not return "${res}"`)
        .catch(error => {new Error(error)}))
    });

    it('should return an correct if the user changes role to admin', function (done) {
      const u = new userModel({...newUser, role: 'admin'})
        u.validate()
        .then(done)
        .catch(err => console.log(err))
    });
});