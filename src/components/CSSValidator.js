let attributePatterns = require('../other/propertiesPatternsShort').default;
import {isObject} from 'lodash';
import find2 from 'lodash/find';
import Utils from '../other/Utils'
let cssValues = require('css-values');
let valueParser = require('postcss-value-parser');

export default class CSSValidator {
    static validate(property, value) {
        property = Utils.camelCaseToDash(property);
        const validationResult = cssValues.default(property, valueParser(value));
        if (!isObject(validationResult) || this.validateAttribute(property)) {
            return true
        }
        else {
            throw new Error(
                validationResult.message
            );
        }
    }

    static validateAttribute(property) {
        const propertyPattern = find2(attributePatterns, (item) => item.name === property);

        if (propertyPattern) {
            return true;
        }
        else {
            return false;
        }
    }
}