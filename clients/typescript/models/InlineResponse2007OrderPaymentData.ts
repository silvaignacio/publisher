/**
 * API Gateway
 * API Gateway
 *
 * OpenAPI spec version: 1.0
 * Contact: checkout@deuna.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse2007OrderPaymentDataAmount } from './InlineResponse2007OrderPaymentDataAmount';
import { InlineResponse2007OrderPaymentDataCustomer } from './InlineResponse2007OrderPaymentDataCustomer';
import { InlineResponse2007OrderPaymentDataFromCard } from './InlineResponse2007OrderPaymentDataFromCard';
import { InlineResponse2007OrderPaymentDataMerchant } from './InlineResponse2007OrderPaymentDataMerchant';
import { HttpFile } from '../http/http';

export class InlineResponse2007OrderPaymentData {
    'amount': InlineResponse2007OrderPaymentDataAmount;
    'createdAt': string;
    'customer': InlineResponse2007OrderPaymentDataCustomer;
    'fromCard': InlineResponse2007OrderPaymentDataFromCard;
    'id': string;
    'merchant': InlineResponse2007OrderPaymentDataMerchant;
    'metadata'?: any;
    'methodType': string;
    'processor': string;
    'status': string;
    'updatedAt': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "InlineResponse2007OrderPaymentDataAmount",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "InlineResponse2007OrderPaymentDataCustomer",
            "format": ""
        },
        {
            "name": "fromCard",
            "baseName": "from_card",
            "type": "InlineResponse2007OrderPaymentDataFromCard",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "InlineResponse2007OrderPaymentDataMerchant",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "methodType",
            "baseName": "method_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "processor",
            "baseName": "processor",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2007OrderPaymentData.attributeTypeMap;
    }

    public constructor() {
    }
}

