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

import { Set } from './Set';
import { HttpFile } from '../http/http';

export class InlineResponse2009 {
    'createdAt'?: string;
    'deletedAt'?: any;
    'email'?: string;
    'firstName'?: string;
    'id'?: string;
    'identityProviders'?: Set<any>;
    'isGuest'?: boolean;
    'isPhoneVerified'?: boolean;
    'lastName'?: string;
    'merchantId'?: string;
    'phone'?: string;
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "any",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
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
            "type": "string",
            "format": ""
        },
        {
            "name": "identityProviders",
            "baseName": "identity_providers",
            "type": "Set<any>",
            "format": ""
        },
        {
            "name": "isGuest",
            "baseName": "is_guest",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isPhoneVerified",
            "baseName": "is_phone_verified",
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
            "name": "merchantId",
            "baseName": "merchant_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
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
        return InlineResponse2009.attributeTypeMap;
    }

    public constructor() {
    }
}

