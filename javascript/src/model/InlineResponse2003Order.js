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
import InlineResponse2002OrderShippingAddress from './InlineResponse2002OrderShippingAddress';
import InlineResponse2003OrderShippingOptions from './InlineResponse2003OrderShippingOptions';

/**
 * The InlineResponse2003Order model module.
 * @module model/InlineResponse2003Order
 * @version 1.0
 */
class InlineResponse2003Order {
    /**
     * Constructs a new <code>InlineResponse2003Order</code>.
     * @alias module:model/InlineResponse2003Order
     */
    constructor() { 
        
        InlineResponse2003Order.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse2003Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003Order} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003Order} The populated <code>InlineResponse2003Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003Order();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [Object]);
            }
            if (data.hasOwnProperty('display_items_total_amount')) {
                obj['display_items_total_amount'] = ApiClient.convertToType(data['display_items_total_amount'], 'String');
            }
            if (data.hasOwnProperty('display_shipping_amount')) {
                obj['display_shipping_amount'] = ApiClient.convertToType(data['display_shipping_amount'], 'String');
            }
            if (data.hasOwnProperty('display_sub_total')) {
                obj['display_sub_total'] = ApiClient.convertToType(data['display_sub_total'], 'String');
            }
            if (data.hasOwnProperty('display_tax_amount')) {
                obj['display_tax_amount'] = ApiClient.convertToType(data['display_tax_amount'], 'String');
            }
            if (data.hasOwnProperty('display_total_amount')) {
                obj['display_total_amount'] = ApiClient.convertToType(data['display_total_amount'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Object]);
            }
            if (data.hasOwnProperty('items_total_amount')) {
                obj['items_total_amount'] = ApiClient.convertToType(data['items_total_amount'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = ApiClient.convertToType(data['payment'], Object);
            }
            if (data.hasOwnProperty('shipping_address')) {
                obj['shipping_address'] = InlineResponse2002OrderShippingAddress.constructFromObject(data['shipping_address']);
            }
            if (data.hasOwnProperty('shipping_amount')) {
                obj['shipping_amount'] = ApiClient.convertToType(data['shipping_amount'], 'Number');
            }
            if (data.hasOwnProperty('shipping_options')) {
                obj['shipping_options'] = InlineResponse2003OrderShippingOptions.constructFromObject(data['shipping_options']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('store_code')) {
                obj['store_code'] = ApiClient.convertToType(data['store_code'], 'String');
            }
            if (data.hasOwnProperty('sub_total')) {
                obj['sub_total'] = ApiClient.convertToType(data['sub_total'], 'Number');
            }
            if (data.hasOwnProperty('tax_amount')) {
                obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
            }
            if (data.hasOwnProperty('total_amount')) {
                obj['total_amount'] = ApiClient.convertToType(data['total_amount'], 'Number');
            }
            if (data.hasOwnProperty('user_instructions')) {
                obj['user_instructions'] = ApiClient.convertToType(data['user_instructions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currency
 */
InlineResponse2003Order.prototype['currency'] = undefined;

/**
 * @member {Array.<Object>} discounts
 */
InlineResponse2003Order.prototype['discounts'] = undefined;

/**
 * @member {String} display_items_total_amount
 */
InlineResponse2003Order.prototype['display_items_total_amount'] = undefined;

/**
 * @member {String} display_shipping_amount
 */
InlineResponse2003Order.prototype['display_shipping_amount'] = undefined;

/**
 * @member {String} display_sub_total
 */
InlineResponse2003Order.prototype['display_sub_total'] = undefined;

/**
 * @member {String} display_tax_amount
 */
InlineResponse2003Order.prototype['display_tax_amount'] = undefined;

/**
 * @member {String} display_total_amount
 */
InlineResponse2003Order.prototype['display_total_amount'] = undefined;

/**
 * @member {Array.<Object>} items
 */
InlineResponse2003Order.prototype['items'] = undefined;

/**
 * @member {Number} items_total_amount
 */
InlineResponse2003Order.prototype['items_total_amount'] = undefined;

/**
 * @member {Object} metadata
 */
InlineResponse2003Order.prototype['metadata'] = undefined;

/**
 * @member {String} order_id
 */
InlineResponse2003Order.prototype['order_id'] = undefined;

/**
 * @member {Object} payment
 */
InlineResponse2003Order.prototype['payment'] = undefined;

/**
 * @member {module:model/InlineResponse2002OrderShippingAddress} shipping_address
 */
InlineResponse2003Order.prototype['shipping_address'] = undefined;

/**
 * @member {Number} shipping_amount
 */
InlineResponse2003Order.prototype['shipping_amount'] = undefined;

/**
 * @member {module:model/InlineResponse2003OrderShippingOptions} shipping_options
 */
InlineResponse2003Order.prototype['shipping_options'] = undefined;

/**
 * @member {String} status
 */
InlineResponse2003Order.prototype['status'] = undefined;

/**
 * @member {String} store_code
 */
InlineResponse2003Order.prototype['store_code'] = undefined;

/**
 * @member {Number} sub_total
 */
InlineResponse2003Order.prototype['sub_total'] = undefined;

/**
 * @member {Number} tax_amount
 */
InlineResponse2003Order.prototype['tax_amount'] = undefined;

/**
 * @member {Number} total_amount
 */
InlineResponse2003Order.prototype['total_amount'] = undefined;

/**
 * @member {String} user_instructions
 */
InlineResponse2003Order.prototype['user_instructions'] = undefined;






export default InlineResponse2003Order;

