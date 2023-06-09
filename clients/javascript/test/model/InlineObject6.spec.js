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
    instance = new ApiGateway.InlineObject6();
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

  describe('InlineObject6', function() {
    it('should create an instance of InlineObject6', function() {
      // uncomment below and update the code to test InlineObject6
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be.a(ApiGateway.InlineObject6);
    });

    it('should have the property billingAddress (base name: "billing_address")', function() {
      // uncomment below and update the code to test the property billingAddress
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property callbackUrl (base name: "callback_url")', function() {
      // uncomment below and update the code to test the property callbackUrl
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property creditCard (base name: "credit_card")', function() {
      // uncomment below and update the code to test the property creditCard
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "device_id")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property methodType (base name: "method_type")', function() {
      // uncomment below and update the code to test the property methodType
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shipping_address")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property specificFields (base name: "specific_fields")', function() {
      // uncomment below and update the code to test the property specificFields
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property storeCode (base name: "store_code")', function() {
      // uncomment below and update the code to test the property storeCode
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new ApiGateway.InlineObject6();
      //expect(instance).to.be();
    });

  });

}));
