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
 * The InlineResponse2001OrderShippingOptionsDetailsContact model module.
 * @module model/InlineResponse2001OrderShippingOptionsDetailsContact
 * @version 1.0
 */
class InlineResponse2001OrderShippingOptionsDetailsContact {
    /**
     * Constructs a new <code>InlineResponse2001OrderShippingOptionsDetailsContact</code>.
     * @alias module:model/InlineResponse2001OrderShippingOptionsDetailsContact
     */
    constructor() { 
        
        InlineResponse2001OrderShippingOptionsDetailsContact.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2001OrderShippingOptionsDetailsContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2001OrderShippingOptionsDetailsContact} obj Optional instance to populate.
     * @return {module:model/InlineResponse2001OrderShippingOptionsDetailsContact} The populated <code>InlineResponse2001OrderShippingOptionsDetailsContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2001OrderShippingOptionsDetailsContact();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
InlineResponse2001OrderShippingOptionsDetailsContact.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
InlineResponse2001OrderShippingOptionsDetailsContact.prototype['phone'] = undefined;






export default InlineResponse2001OrderShippingOptionsDetailsContact;
