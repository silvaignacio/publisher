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
    instance = new ApiGateway.InlineResponse2001Order();
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

  describe('InlineResponse2001Order', function() {
    it('should create an instance of InlineResponse2001Order', function() {
      // uncomment below and update the code to test InlineResponse2001Order
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be.a(ApiGateway.InlineResponse2001Order);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property discounts (base name: "discounts")', function() {
      // uncomment below and update the code to test the property discounts
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property displayItemsTotalAmount (base name: "display_items_total_amount")', function() {
      // uncomment below and update the code to test the property displayItemsTotalAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property displayShippingAmount (base name: "display_shipping_amount")', function() {
      // uncomment below and update the code to test the property displayShippingAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property displaySubTotal (base name: "display_sub_total")', function() {
      // uncomment below and update the code to test the property displaySubTotal
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property displayTaxAmount (base name: "display_tax_amount")', function() {
      // uncomment below and update the code to test the property displayTaxAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property displayTotalAmount (base name: "display_total_amount")', function() {
      // uncomment below and update the code to test the property displayTotalAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property giftCard (base name: "gift_card")', function() {
      // uncomment below and update the code to test the property giftCard
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property itemsTotalAmount (base name: "items_total_amount")', function() {
      // uncomment below and update the code to test the property itemsTotalAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property payment (base name: "payment")', function() {
      // uncomment below and update the code to test the property payment
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shipping_address")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property shippingAmount (base name: "shipping_amount")', function() {
      // uncomment below and update the code to test the property shippingAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property shippingOptions (base name: "shipping_options")', function() {
      // uncomment below and update the code to test the property shippingOptions
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property storeCode (base name: "store_code")', function() {
      // uncomment below and update the code to test the property storeCode
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property subTotal (base name: "sub_total")', function() {
      // uncomment below and update the code to test the property subTotal
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "tax_amount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "total_amount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

    it('should have the property userInstructions (base name: "user_instructions")', function() {
      // uncomment below and update the code to test the property userInstructions
      //var instance = new ApiGateway.InlineResponse2001Order();
      //expect(instance).to.be();
    });

  });

}));
