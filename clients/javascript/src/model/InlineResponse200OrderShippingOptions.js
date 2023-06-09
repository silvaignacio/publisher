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
import InlineResponse200OrderShippingOptionsDetails from './InlineResponse200OrderShippingOptionsDetails';

/**
 * The InlineResponse200OrderShippingOptions model module.
 * @module model/InlineResponse200OrderShippingOptions
 * @version 1.0
 */
class InlineResponse200OrderShippingOptions {
    /**
     * Constructs a new <code>InlineResponse200OrderShippingOptions</code>.
     * @alias module:model/InlineResponse200OrderShippingOptions
     * @param details {module:model/InlineResponse200OrderShippingOptionsDetails} 
     * @param type {String} 
     */
    constructor(details, type) { 
        
        InlineResponse200OrderShippingOptions.initialize(this, details, type);
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
     * Constructs a <code>InlineResponse200OrderShippingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200OrderShippingOptions} obj Optional instance to populate.
     * @return {module:model/InlineResponse200OrderShippingOptions} The populated <code>InlineResponse200OrderShippingOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200OrderShippingOptions();

            if (data.hasOwnProperty('details')) {
                obj['details'] = InlineResponse200OrderShippingOptionsDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse200OrderShippingOptionsDetails} details
 */
InlineResponse200OrderShippingOptions.prototype['details'] = undefined;

/**
 * @member {String} type
 */
InlineResponse200OrderShippingOptions.prototype['type'] = undefined;






export default InlineResponse200OrderShippingOptions;

