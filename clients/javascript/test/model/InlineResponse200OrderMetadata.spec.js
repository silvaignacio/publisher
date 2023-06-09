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
    instance = new ApiGateway.InlineResponse200OrderMetadata();
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

  describe('InlineResponse200OrderMetadata', function() {
    it('should create an instance of InlineResponse200OrderMetadata', function() {
      // uncomment below and update the code to test InlineResponse200OrderMetadata
      //var instance = new ApiGateway.InlineResponse200OrderMetadata();
      //expect(instance).to.be.a(ApiGateway.InlineResponse200OrderMetadata);
    });

    it('should have the property key1 (base name: "key1")', function() {
      // uncomment below and update the code to test the property key1
      //var instance = new ApiGateway.InlineResponse200OrderMetadata();
      //expect(instance).to.be();
    });

    it('should have the property key2 (base name: "key2")', function() {
      // uncomment below and update the code to test the property key2
      //var instance = new ApiGateway.InlineResponse200OrderMetadata();
      //expect(instance).to.be();
    });

  });

}));
