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

import { HttpFile } from '../http/http';

export class InlineResponse2002OrderShippingAddress {
    'additionalDescription'?: string;
    'address1'?: string;
    'address2'?: string;
    'addressType'?: string;
    'city'?: string;
    'countryCode'?: string;
    'createdAt'?: string;
    'firstName'?: string;
    'id'?: number;
    'identityDocument'?: string;
    'isDefault'?: boolean;
    'lastName'?: string;
    'lat'?: number;
    'lng'?: number;
    'phone'?: string;
    'stateName'?: string;
    'updatedAt'?: string;
    'userId'?: string;
    'zipcode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additionalDescription",
            "baseName": "additional_description",
            "type": "string",
            "format": ""
        },
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string",
            "format": ""
        },
        {
            "name": "address2",
            "baseName": "address2",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressType",
            "baseName": "address_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "identityDocument",
            "baseName": "identity_document",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDefault",
            "baseName": "is_default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": ""
        },
        {
            "name": "lng",
            "baseName": "lng",
            "type": "number",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "stateName",
            "baseName": "state_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipcode",
            "baseName": "zipcode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2002OrderShippingAddress.attributeTypeMap;
    }

    public constructor() {
    }
}

