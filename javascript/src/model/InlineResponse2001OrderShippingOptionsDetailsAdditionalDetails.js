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
 * The InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails model module.
 * @module model/InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails
 * @version 1.0
 */
class InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails {
    /**
     * Constructs a new <code>InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails</code>.
     * @alias module:model/InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails
     */
    constructor() { 
        
        InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails} The populated <code>InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails();

            if (data.hasOwnProperty('pickup_time')) {
                obj['pickup_time'] = ApiClient.convertToType(data['pickup_time'], 'String');
            }
            if (data.hasOwnProperty('stock_location')) {
                obj['stock_location'] = ApiClient.convertToType(data['stock_location'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} pickup_time
 */
InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails.prototype['pickup_time'] = undefined;

/**
 * @member {String} stock_location
 */
InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails.prototype['stock_location'] = undefined;






export default InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails;
