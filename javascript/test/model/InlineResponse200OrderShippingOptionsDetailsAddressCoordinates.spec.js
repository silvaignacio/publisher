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
    instance = new ApiGateway.InlineResponse200OrderShippingOptionsDetailsAddressCoordinates();
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

  describe('InlineResponse200OrderShippingOptionsDetailsAddressCoordinates', function() {
    it('should create an instance of InlineResponse200OrderShippingOptionsDetailsAddressCoordinates', function() {
      // uncomment below and update the code to test InlineResponse200OrderShippingOptionsDetailsAddressCoordinates
      //var instance = new ApiGateway.InlineResponse200OrderShippingOptionsDetailsAddressCoordinates();
      //expect(instance).to.be.a(ApiGateway.InlineResponse200OrderShippingOptionsDetailsAddressCoordinates);
    });

    it('should have the property lat (base name: "lat")', function() {
      // uncomment below and update the code to test the property lat
      //var instance = new ApiGateway.InlineResponse200OrderShippingOptionsDetailsAddressCoordinates();
      //expect(instance).to.be();
    });

    it('should have the property lng (base name: "lng")', function() {
      // uncomment below and update the code to test the property lng
      //var instance = new ApiGateway.InlineResponse200OrderShippingOptionsDetailsAddressCoordinates();
      //expect(instance).to.be();
    });

  });

}));