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
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.0
 */
class InlineObject2 {
    /**
     * Constructs a new <code>InlineObject2</code>.
     * @alias module:model/InlineObject2
     */
    constructor() { 
        
        InlineObject2.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject2();

            if (data.hasOwnProperty('additional_description')) {
                obj['additional_description'] = ApiClient.convertToType(data['additional_description'], 'String');
            }
            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('address_type')) {
                obj['address_type'] = ApiClient.convertToType(data['address_type'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country_iso')) {
                obj['country_iso'] = ApiClient.convertToType(data['country_iso'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('identity_document')) {
                obj['identity_document'] = ApiClient.convertToType(data['identity_document'], 'String');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('state_name')) {
                obj['state_name'] = ApiClient.convertToType(data['state_name'], 'String');
            }
            if (data.hasOwnProperty('zipcode')) {
                obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} additional_description
 */
InlineObject2.prototype['additional_description'] = undefined;

/**
 * @member {String} address1
 */
InlineObject2.prototype['address1'] = undefined;

/**
 * @member {String} address2
 */
InlineObject2.prototype['address2'] = undefined;

/**
 * @member {String} address_type
 */
InlineObject2.prototype['address_type'] = undefined;

/**
 * @member {String} city
 */
InlineObject2.prototype['city'] = undefined;

/**
 * @member {String} country_iso
 */
InlineObject2.prototype['country_iso'] = undefined;

/**
 * @member {String} first_name
 */
InlineObject2.prototype['first_name'] = undefined;

/**
 * @member {Number} id
 */
InlineObject2.prototype['id'] = undefined;

/**
 * @member {String} identity_document
 */
InlineObject2.prototype['identity_document'] = undefined;

/**
 * @member {Boolean} is_default
 */
InlineObject2.prototype['is_default'] = undefined;

/**
 * @member {String} last_name
 */
InlineObject2.prototype['last_name'] = undefined;

/**
 * @member {Number} lat
 */
InlineObject2.prototype['lat'] = undefined;

/**
 * @member {Number} lng
 */
InlineObject2.prototype['lng'] = undefined;

/**
 * @member {String} phone
 */
InlineObject2.prototype['phone'] = undefined;

/**
 * @member {String} state_name
 */
InlineObject2.prototype['state_name'] = undefined;

/**
 * @member {String} zipcode
 */
InlineObject2.prototype['zipcode'] = undefined;






export default InlineObject2;
