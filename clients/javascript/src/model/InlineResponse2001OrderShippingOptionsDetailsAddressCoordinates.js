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
 * The InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates model module.
 * @module model/InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates
 * @version 1.0
 */
class InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates {
    /**
     * Constructs a new <code>InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates</code>.
     * @alias module:model/InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates
     */
    constructor() { 
        
        InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates} The populated <code>InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates();

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lat
 */
InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates.prototype['lat'] = undefined;

/**
 * @member {Number} lng
 */
InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates.prototype['lng'] = undefined;






export default InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates;

