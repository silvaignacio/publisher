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
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 1.0
 */
class InlineResponse2008 {
    /**
     * Constructs a new <code>InlineResponse2008</code>.
     * @alias module:model/InlineResponse2008
     */
    constructor() { 
        
        InlineResponse2008.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2008();

            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('user-deuna')) {
                obj['user-deuna'] = ApiClient.convertToType(data['user-deuna'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} refresh_token
 */
InlineResponse2008.prototype['refresh_token'] = undefined;

/**
 * @member {String} token
 */
InlineResponse2008.prototype['token'] = undefined;

/**
 * @member {Boolean} user-deuna
 */
InlineResponse2008.prototype['user-deuna'] = undefined;






export default InlineResponse2008;

