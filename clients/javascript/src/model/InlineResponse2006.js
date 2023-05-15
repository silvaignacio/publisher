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
import InlineResponse2001Order from './InlineResponse2001Order';

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 1.0
 */
class InlineResponse2006 {
    /**
     * Constructs a new <code>InlineResponse2006</code>.
     * @alias module:model/InlineResponse2006
     */
    constructor() { 
        
        InlineResponse2006.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2006} obj Optional instance to populate.
     * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2006();

            if (data.hasOwnProperty('order')) {
                obj['order'] = InlineResponse2001Order.constructFromObject(data['order']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2001Order} order
 */
InlineResponse2006.prototype['order'] = undefined;






export default InlineResponse2006;
