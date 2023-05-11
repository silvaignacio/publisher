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


import ApiClient from "../ApiClient";
import InlineObject from '../model/InlineObject';
import InlineObject1 from '../model/InlineObject1';
import InlineObject2 from '../model/InlineObject2';
import InlineObject3 from '../model/InlineObject3';
import InlineObject4 from '../model/InlineObject4';
import InlineObject5 from '../model/InlineObject5';
import InlineObject6 from '../model/InlineObject6';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import InlineResponse2003 from '../model/InlineResponse2003';
import InlineResponse2004 from '../model/InlineResponse2004';
import InlineResponse2005 from '../model/InlineResponse2005';
import InlineResponse2006 from '../model/InlineResponse2006';
import InlineResponse2007 from '../model/InlineResponse2007';

/**
* ExternalMerchantAPI service.
* @module api/ExternalMerchantAPIApi
* @version 1.0
*/
export default class ExternalMerchantAPIApi {

    /**
    * Constructs a new ExternalMerchantAPIApi. 
    * @alias module:api/ExternalMerchantAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenCouponsCouponCodeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove Coupon
     * Remove coupon
     * @param {String} orderToken 
     * @param {String} couponCode 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {String} opts.authorization 
     * @param {module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenCouponsCouponCodeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete");
      }
      // verify the required parameter 'couponCode' is set
      if (couponCode === undefined || couponCode === null) {
        throw new Error("Missing the required parameter 'couponCode' when calling merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete");
      }

      let pathParams = {
        'order_token': orderToken,
        'coupon_code': couponCode
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/merchants/external-orders/{order_token}/coupons/{coupon_code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsExternalOrdersOrderTokenCouponsPost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenCouponsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply Coupon
     * Apply coupon
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {String} opts.authorization 
     * @param {module:model/InlineObject} opts.inlineObject 
     * @param {module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenCouponsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    merchantsExternalOrdersOrderTokenCouponsPost(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject'];
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsExternalOrdersOrderTokenCouponsPost");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/merchants/external-orders/{order_token}/coupons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsExternalOrdersOrderTokenGiftCardsPost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenGiftCardsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply Gift Card
     * Apply Gift Card
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {String} opts.authorization 
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenGiftCardsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject1'];
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsExternalOrdersOrderTokenGiftCardsPost");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/merchants/external-orders/{order_token}/gift-cards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsExternalOrdersOrderTokenShippingMethodsCodePatch operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenShippingMethodsCodePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the selected shipping method
     * Update the selected shipping method
     * @param {String} orderToken 
     * @param {String} code 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {String} opts.authorization 
     * @param {module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenShippingMethodsCodePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsExternalOrdersOrderTokenShippingMethodsCodePatch");
      }
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling merchantsExternalOrdersOrderTokenShippingMethodsCodePatch");
      }

      let pathParams = {
        'order_token': orderToken,
        'code': code
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2003;
      return this.apiClient.callApi(
        '/merchants/external-orders/{order_token}/shipping-methods/{code}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsExternalOrdersOrderTokenShippingMethodsPost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenShippingMethodsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get shipping methods
     * Get shipping methods
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {String} opts.authorization 
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @param {module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenShippingMethodsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject2'];
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsExternalOrdersOrderTokenShippingMethodsPost");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/merchants/external-orders/{order_token}/shipping-methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsExternalOrdersOrderTokenShippingRatePost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenShippingRatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Shipping Rate
     * Get shipping rate
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {String} opts.authorization 
     * @param {String} opts.lat 
     * @param {String} opts.lon 
     * @param {String} opts.city 
     * @param {String} opts.countryIso 
     * @param {module:model/InlineObject3} opts.inlineObject3 
     * @param {module:api/ExternalMerchantAPIApi~merchantsExternalOrdersOrderTokenShippingRatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject3'];
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsExternalOrdersOrderTokenShippingRatePost");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
        'lat': opts['lat'],
        'lon': opts['lon'],
        'city': opts['city'],
        'country_iso': opts['countryIso']
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey'],
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;
      return this.apiClient.callApi(
        '/merchants/external-orders/{order_token}/shipping-rate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsOrdersOrderTokenGet operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsOrdersOrderTokenGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get order
     * Get order by token
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {module:api/ExternalMerchantAPIApi~merchantsOrdersOrderTokenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    merchantsOrdersOrderTokenGet(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsOrdersOrderTokenGet");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/merchants/orders/{order_token}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsOrdersOrderTokenPaymentsMethodsGet operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsOrdersOrderTokenPaymentsMethodsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2005} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Payment Methods
     * Get payment methods
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.xApiKey 
     * @param {String} opts.xStoreCode 
     * @param {module:api/ExternalMerchantAPIApi~merchantsOrdersOrderTokenPaymentsMethodsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2005}
     */
    merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsOrdersOrderTokenPaymentsMethodsGet");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization'],
        'X-Api-Key': opts['xApiKey'],
        'X-Store-Code': opts['xStoreCode']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2005;
      return this.apiClient.callApi(
        '/merchants/orders/{order_token}/payments-methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsOrdersOrderTokenTransactionsVerifyPost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsOrdersOrderTokenTransactionsVerifyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify OTP Dinners
     * Verify OTP Dinners
     * @param {String} orderToken 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.xApiKey 
     * @param {String} opts.xMerchantID 
     * @param {String} opts.xStoreCode 
     * @param {module:model/InlineObject5} opts.inlineObject5 
     * @param {module:api/ExternalMerchantAPIApi~merchantsOrdersOrderTokenTransactionsVerifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject5'];
      // verify the required parameter 'orderToken' is set
      if (orderToken === undefined || orderToken === null) {
        throw new Error("Missing the required parameter 'orderToken' when calling merchantsOrdersOrderTokenTransactionsVerifyPost");
      }

      let pathParams = {
        'order_token': orderToken
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization'],
        'X-Api-Key': opts['xApiKey'],
        'X-Merchant-ID': opts['xMerchantID'],
        'X-Store-Code': opts['xStoreCode']
      };
      let formParams = {
      };

      let authNames = ['Authorization', 'X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2006;
      return this.apiClient.callApi(
        '/merchants/orders/{order_token}/transactions/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsOrdersPost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsOrdersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Order
     * Create order
     * @param {Object} opts Optional parameters
     * @param {String} opts.xApiKey 
     * @param {module:model/InlineObject4} opts.inlineObject4 
     * @param {module:api/ExternalMerchantAPIApi~merchantsOrdersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    merchantsOrdersPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject4'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Api-Key': opts['xApiKey']
      };
      let formParams = {
      };

      let authNames = ['X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/merchants/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the merchantsTransactionsPurchasePost operation.
     * @callback module:api/ExternalMerchantAPIApi~merchantsTransactionsPurchasePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2007} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Purchase
     * Purchase
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.xApiKey 
     * @param {String} opts.xMerchantID 
     * @param {String} opts.xStoreCode 
     * @param {String} opts.xDeviceId 
     * @param {String} opts.xSessionId 
     * @param {String} opts.userAgent 
     * @param {module:model/InlineObject6} opts.inlineObject6 
     * @param {module:api/ExternalMerchantAPIApi~merchantsTransactionsPurchasePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2007}
     */
    merchantsTransactionsPurchasePost(opts, callback) {
      opts = opts || {};
      let postBody = opts['inlineObject6'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization'],
        'X-Api-Key': opts['xApiKey'],
        'X-Merchant-ID': opts['xMerchantID'],
        'X-Store-Code': opts['xStoreCode'],
        'X-Device-Id': opts['xDeviceId'],
        'X-Session-Id': opts['xSessionId'],
        'User-Agent': opts['userAgent']
      };
      let formParams = {
      };

      let authNames = ['Authorization', 'X-Api-Key'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2007;
      return this.apiClient.callApi(
        '/merchants/transactions/purchase', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
