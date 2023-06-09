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

import { InlineResponse200OrderMetadata } from './InlineResponse200OrderMetadata';
import { MerchantsOrdersOrderShippingAddress } from './MerchantsOrdersOrderShippingAddress';
import { MerchantsOrdersOrderShippingOptions } from './MerchantsOrdersOrderShippingOptions';
import { Set } from './Set';
import { HttpFile } from '../http/http';

export class MerchantsOrdersOrder {
    'currency': string;
    'discounts': Set<any>;
    'items': Set<any>;
    'itemsTotalAmount': number;
    'metadata': InlineResponse200OrderMetadata;
    'orderId': string;
    'shippingAddress': MerchantsOrdersOrderShippingAddress;
    'shippingAmount': number;
    'shippingOptions': MerchantsOrdersOrderShippingOptions;
    'storeCode': string;
    'subTotal': number;
    'taxAmount': number;
    'totalAmount': number;
    'userInstructions': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Set<any>",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Set<any>",
            "format": ""
        },
        {
            "name": "itemsTotalAmount",
            "baseName": "items_total_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "InlineResponse200OrderMetadata",
            "format": ""
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "MerchantsOrdersOrderShippingAddress",
            "format": ""
        },
        {
            "name": "shippingAmount",
            "baseName": "shipping_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "shippingOptions",
            "baseName": "shipping_options",
            "type": "MerchantsOrdersOrderShippingOptions",
            "format": ""
        },
        {
            "name": "storeCode",
            "baseName": "store_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "subTotal",
            "baseName": "sub_total",
            "type": "number",
            "format": ""
        },
        {
            "name": "taxAmount",
            "baseName": "tax_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalAmount",
            "baseName": "total_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "userInstructions",
            "baseName": "user_instructions",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MerchantsOrdersOrder.attributeTypeMap;
    }

    public constructor() {
    }
}

