/**
 * API Gateway
 * API Gateway
 *
 * The version of the OpenAPI document: 1.0
 * Contact: checkout@deuna.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiGateway);
  }
}(this, function(expect, ApiGateway) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MerchantsTransactionsPurchaseCreditCard', function() {
    it('should create an instance of MerchantsTransactionsPurchaseCreditCard', function() {
      // uncomment below and update the code to test MerchantsTransactionsPurchaseCreditCard
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be.a(ApiGateway.MerchantsTransactionsPurchaseCreditCard);
    });

    it('should have the property address1 (base name: "address1")', function() {
      // uncomment below and update the code to test the property address1
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property cardCvv (base name: "card_cvv")', function() {
      // uncomment below and update the code to test the property cardCvv
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property cardHolder (base name: "card_holder")', function() {
      // uncomment below and update the code to test the property cardHolder
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property cardHolderDni (base name: "card_holder_dni")', function() {
      // uncomment below and update the code to test the property cardHolderDni
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property cardNumber (base name: "card_number")', function() {
      // uncomment below and update the code to test the property cardNumber
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property expiryMonth (base name: "expiry_month")', function() {
      // uncomment below and update the code to test the property expiryMonth
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property expiryYear (base name: "expiry_year")', function() {
      // uncomment below and update the code to test the property expiryYear
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

    it('should have the property zip (base name: "zip")', function() {
      // uncomment below and update the code to test the property zip
      //var instance = new ApiGateway.MerchantsTransactionsPurchaseCreditCard();
      //expect(instance).to.be();
    });

  });

}));