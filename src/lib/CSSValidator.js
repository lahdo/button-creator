let attributePatterns = require('../fixtures/propertiesPatternsShort').default;
import {isObject} from 'lodash';
import find2 from 'lodash/find';
import * as Utils from './Utils'
let cssValues = require('css-values');
let valueParser = require('postcss-value-parser');

export function validate(property, value) {
    property = Utils.camelCaseToDash(property);
    const validationResult = cssValues.default(property, valueParser(value));
    if (!isObject(validationResult) || validateAttribute(property)) {
        return true
    }
    else {
        throw new Error(
            validationResult.message
        );
    }
}

export function validateAttribute(property) {
    const propertyPattern = find2(attributePatterns, (item) => item.name === property);

    if (propertyPattern) {
        return true;
    }
    else {
        return false;
    }
}