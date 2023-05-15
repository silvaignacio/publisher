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
import InlineResponse2004Order from './InlineResponse2004Order';
import InlineResponse2004ShippingOption from './InlineResponse2004ShippingOption';

/**
 * The InlineResponse2004 model module.
 * @module model/InlineResponse2004
 * @version 1.0
 */
class InlineResponse2004 {
    /**
     * Constructs a new <code>InlineResponse2004</code>.
     * @alias module:model/InlineResponse2004
     */
    constructor() { 
        
        InlineResponse2004.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004();

            if (data.hasOwnProperty('order')) {
                obj['order'] = InlineResponse2004Order.constructFromObject(data['order']);
            }
            if (data.hasOwnProperty('shipping_option')) {
                obj['shipping_option'] = InlineResponse2004ShippingOption.constructFromObject(data['shipping_option']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2004Order} order
 */
InlineResponse2004.prototype['order'] = undefined;

/**
 * @member {module:model/InlineResponse2004ShippingOption} shipping_option
 */
InlineResponse2004.prototype['shipping_option'] = undefined;






export default InlineResponse2004;
