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

import { InlineResponse200OrderShippingOptionsDetailsAdditionalDetails } from './InlineResponse200OrderShippingOptionsDetailsAdditionalDetails';
import { InlineResponse200OrderShippingOptionsDetailsAddressCoordinates } from './InlineResponse200OrderShippingOptionsDetailsAddressCoordinates';
import { MerchantsOrdersOrderShippingOptionsDetailsContact } from './MerchantsOrdersOrderShippingOptionsDetailsContact';
import { HttpFile } from '../http/http';

export class MerchantsOrdersOrderShippingOptionsDetails {
    'additionalDetails': InlineResponse200OrderShippingOptionsDetailsAdditionalDetails;
    'address': string;
    'addressCoordinates': InlineResponse200OrderShippingOptionsDetailsAddressCoordinates;
    'contact': MerchantsOrdersOrderShippingOptionsDetailsContact;
    'storeName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additionalDetails",
            "baseName": "additional_details",
            "type": "InlineResponse200OrderShippingOptionsDetailsAdditionalDetails",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressCoordinates",
            "baseName": "address_coordinates",
            "type": "InlineResponse200OrderShippingOptionsDetailsAddressCoordinates",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "MerchantsOrdersOrderShippingOptionsDetailsContact",
            "format": ""
        },
        {
            "name": "storeName",
            "baseName": "store_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MerchantsOrdersOrderShippingOptionsDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
