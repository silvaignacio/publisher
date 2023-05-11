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
 * The InlineResponse2007OrderPaymentDataFromCard model module.
 * @module model/InlineResponse2007OrderPaymentDataFromCard
 * @version 1.0
 */
class InlineResponse2007OrderPaymentDataFromCard {
    /**
     * Constructs a new <code>InlineResponse2007OrderPaymentDataFromCard</code>.
     * @alias module:model/InlineResponse2007OrderPaymentDataFromCard
     * @param cardBrand {String} 
     * @param firstSix {String} 
     * @param lastFour {String} 
     */
    constructor(cardBrand, firstSix, lastFour) { 
        
        InlineResponse2007OrderPaymentDataFromCard.initialize(this, cardBrand, firstSix, lastFour);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cardBrand, firstSix, lastFour) { 
        obj['card_brand'] = cardBrand;
        obj['first_six'] = firstSix;
        obj['last_four'] = lastFour;
    }

    /**
     * Constructs a <code>InlineResponse2007OrderPaymentDataFromCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007OrderPaymentDataFromCard} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007OrderPaymentDataFromCard} The populated <code>InlineResponse2007OrderPaymentDataFromCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007OrderPaymentDataFromCard();

            if (data.hasOwnProperty('card_brand')) {
                obj['card_brand'] = ApiClient.convertToType(data['card_brand'], 'String');
            }
            if (data.hasOwnProperty('first_six')) {
                obj['first_six'] = ApiClient.convertToType(data['first_six'], 'String');
            }
            if (data.hasOwnProperty('last_four')) {
                obj['last_four'] = ApiClient.convertToType(data['last_four'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} card_brand
 */
InlineResponse2007OrderPaymentDataFromCard.prototype['card_brand'] = undefined;

/**
 * @member {String} first_six
 */
InlineResponse2007OrderPaymentDataFromCard.prototype['first_six'] = undefined;

/**
 * @member {String} last_four
 */
InlineResponse2007OrderPaymentDataFromCard.prototype['last_four'] = undefined;






export default InlineResponse2007OrderPaymentDataFromCard;
