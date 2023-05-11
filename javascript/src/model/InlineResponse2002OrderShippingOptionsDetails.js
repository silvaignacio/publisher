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
import InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates from './InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates';
import InlineResponse2001OrderShippingOptionsDetailsContact from './InlineResponse2001OrderShippingOptionsDetailsContact';

/**
 * The InlineResponse2002OrderShippingOptionsDetails model module.
 * @module model/InlineResponse2002OrderShippingOptionsDetails
 * @version 1.0
 */
class InlineResponse2002OrderShippingOptionsDetails {
    /**
     * Constructs a new <code>InlineResponse2002OrderShippingOptionsDetails</code>.
     * @alias module:model/InlineResponse2002OrderShippingOptionsDetails
     */
    constructor() { 
        
        InlineResponse2002OrderShippingOptionsDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2002OrderShippingOptionsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002OrderShippingOptionsDetails} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002OrderShippingOptionsDetails} The populated <code>InlineResponse2002OrderShippingOptionsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002OrderShippingOptionsDetails();

            if (data.hasOwnProperty('additional_details')) {
                obj['additional_details'] = ApiClient.convertToType(data['additional_details'], Object);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('address_coordinates')) {
                obj['address_coordinates'] = InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates.constructFromObject(data['address_coordinates']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = InlineResponse2001OrderShippingOptionsDetailsContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('store_name')) {
                obj['store_name'] = ApiClient.convertToType(data['store_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} additional_details
 */
InlineResponse2002OrderShippingOptionsDetails.prototype['additional_details'] = undefined;

/**
 * @member {String} address
 */
InlineResponse2002OrderShippingOptionsDetails.prototype['address'] = undefined;

/**
 * @member {module:model/InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates} address_coordinates
 */
InlineResponse2002OrderShippingOptionsDetails.prototype['address_coordinates'] = undefined;

/**
 * @member {module:model/InlineResponse2001OrderShippingOptionsDetailsContact} contact
 */
InlineResponse2002OrderShippingOptionsDetails.prototype['contact'] = undefined;

/**
 * @member {String} store_name
 */
InlineResponse2002OrderShippingOptionsDetails.prototype['store_name'] = undefined;






export default InlineResponse2002OrderShippingOptionsDetails;
