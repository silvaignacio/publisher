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

import ApiClient from '../ApiClient';

/**
 * The InlineResponse2007OrderPaymentDataMerchant model module.
 * @module model/InlineResponse2007OrderPaymentDataMerchant
 * @version 1.0
 */
class InlineResponse2007OrderPaymentDataMerchant {
    /**
     * Constructs a new <code>InlineResponse2007OrderPaymentDataMerchant</code>.
     * @alias module:model/InlineResponse2007OrderPaymentDataMerchant
     * @param id {String} 
     * @param storeCode {String} 
     */
    constructor(id, storeCode) { 
        
        InlineResponse2007OrderPaymentDataMerchant.initialize(this, id, storeCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, storeCode) { 
        obj['id'] = id;
        obj['store_code'] = storeCode;
    }

    /**
     * Constructs a <code>InlineResponse2007OrderPaymentDataMerchant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007OrderPaymentDataMerchant} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007OrderPaymentDataMerchant} The populated <code>InlineResponse2007OrderPaymentDataMerchant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007OrderPaymentDataMerchant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('store_code')) {
                obj['store_code'] = ApiClient.convertToType(data['store_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
InlineResponse2007OrderPaymentDataMerchant.prototype['id'] = undefined;

/**
 * @member {String} store_code
 */
InlineResponse2007OrderPaymentDataMerchant.prototype['store_code'] = undefined;






export default InlineResponse2007OrderPaymentDataMerchant;

