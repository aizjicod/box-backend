const { assert } = require('chai');
var contactInformationModel = require('../../models/contact_information_model');
describe('contact information model validations', function () {
    let newContactInformation = {
      telephone_n: '+58 4122458954',
      email: 'test@gmail.com',
      city: 'Caracas'
    }

    beforeEach(() => {
      newContactInformation = {
        telephone_n: '+58 4122458954',
        email: 'test@gmail.com',
        city: 'Caracas'
      }
    });

    it('should return correct with all values applied', function (done) {
      const ci = new contactInformationModel(newContactInformation)
        ci.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });

    it('should return correct as any values in this table are optional', function (done) {
      const ci = new contactInformationModel({...newContactInformation, email: null})
      ci.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });

    it('should return correct but it will trim it', function (done) {
      const ci = new contactInformationModel({...newContactInformation, email: ' '})
      ci.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });

    it('should return correct but it will trim it', function (done) {
      const ci = new contactInformationModel({...newContactInformation, email: '         test@gmail.com      '})
      ci.validate()
        .then(() => done())
        .catch((error) => console.log(error))
    });
});