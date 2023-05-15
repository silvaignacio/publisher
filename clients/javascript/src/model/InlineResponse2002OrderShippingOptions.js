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
import InlineResponse2002OrderShippingOptionsDetails from './InlineResponse2002OrderShippingOptionsDetails';

/**
 * The InlineResponse2002OrderShippingOptions model module.
 * @module model/InlineResponse2002OrderShippingOptions
 * @version 1.0
 */
class InlineResponse2002OrderShippingOptions {
    /**
     * Constructs a new <code>InlineResponse2002OrderShippingOptions</code>.
     * @alias module:model/InlineResponse2002OrderShippingOptions
     * @param details {module:model/InlineResponse2002OrderShippingOptionsDetails} 
     * @param type {String} 
     */
    constructor(details, type) { 
        
        InlineResponse2002OrderShippingOptions.initialize(this, details, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, details, type) { 
        obj['details'] = details;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>InlineResponse2002OrderShippingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2002OrderShippingOptions} obj Optional instance to populate.
     * @return {module:model/InlineResponse2002OrderShippingOptions} The populated <code>InlineResponse2002OrderShippingOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2002OrderShippingOptions();

            if (data.hasOwnProperty('details')) {
                obj['details'] = InlineResponse2002OrderShippingOptionsDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2002OrderShippingOptionsDetails} details
 */
InlineResponse2002OrderShippingOptions.prototype['details'] = undefined;

/**
 * @member {String} type
 */
InlineResponse2002OrderShippingOptions.prototype['type'] = undefined;






export default InlineResponse2002OrderShippingOptions;
