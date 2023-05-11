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
import InlineResponse200OrderShippingOptionsDetailsAdditionalDetails from './InlineResponse200OrderShippingOptionsDetailsAdditionalDetails';
import InlineResponse200OrderShippingOptionsDetailsAddressCoordinates from './InlineResponse200OrderShippingOptionsDetailsAddressCoordinates';
import InlineResponse200OrderShippingOptionsDetailsContact from './InlineResponse200OrderShippingOptionsDetailsContact';

/**
 * The InlineResponse200OrderShippingOptionsDetails model module.
 * @module model/InlineResponse200OrderShippingOptionsDetails
 * @version 1.0
 */
class InlineResponse200OrderShippingOptionsDetails {
    /**
     * Constructs a new <code>InlineResponse200OrderShippingOptionsDetails</code>.
     * @alias module:model/InlineResponse200OrderShippingOptionsDetails
     * @param additionalDetails {module:model/InlineResponse200OrderShippingOptionsDetailsAdditionalDetails} 
     * @param address {String} 
     * @param addressCoordinates {module:model/InlineResponse200OrderShippingOptionsDetailsAddressCoordinates} 
     * @param contact {module:model/InlineResponse200OrderShippingOptionsDetailsContact} 
     * @param storeName {String} 
     */
    constructor(additionalDetails, address, addressCoordinates, contact, storeName) { 
        
        InlineResponse200OrderShippingOptionsDetails.initialize(this, additionalDetails, address, addressCoordinates, contact, storeName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, additionalDetails, address, addressCoordinates, contact, storeName) { 
        obj['additional_details'] = additionalDetails;
        obj['address'] = address;
        obj['address_coordinates'] = addressCoordinates;
        obj['contact'] = contact;
        obj['store_name'] = storeName;
    }

    /**
     * Constructs a <code>InlineResponse200OrderShippingOptionsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200OrderShippingOptionsDetails} obj Optional instance to populate.
     * @return {module:model/InlineResponse200OrderShippingOptionsDetails} The populated <code>InlineResponse200OrderShippingOptionsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200OrderShippingOptionsDetails();

            if (data.hasOwnProperty('additional_details')) {
                obj['additional_details'] = InlineResponse200OrderShippingOptionsDetailsAdditionalDetails.constructFromObject(data['additional_details']);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('address_coordinates')) {
                obj['address_coordinates'] = InlineResponse200OrderShippingOptionsDetailsAddressCoordinates.constructFromObject(data['address_coordinates']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = InlineResponse200OrderShippingOptionsDetailsContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('store_name')) {
                obj['store_name'] = ApiClient.convertToType(data['store_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse200OrderShippingOptionsDetailsAdditionalDetails} additional_details
 */
InlineResponse200OrderShippingOptionsDetails.prototype['additional_details'] = undefined;

/**
 * @member {String} address
 */
InlineResponse200OrderShippingOptionsDetails.prototype['address'] = undefined;

/**
 * @member {module:model/InlineResponse200OrderShippingOptionsDetailsAddressCoordinates} address_coordinates
 */
InlineResponse200OrderShippingOptionsDetails.prototype['address_coordinates'] = undefined;

/**
 * @member {module:model/InlineResponse200OrderShippingOptionsDetailsContact} contact
 */
InlineResponse200OrderShippingOptionsDetails.prototype['contact'] = undefined;

/**
 * @member {String} store_name
 */
InlineResponse200OrderShippingOptionsDetails.prototype['store_name'] = undefined;






export default InlineResponse200OrderShippingOptionsDetails;
