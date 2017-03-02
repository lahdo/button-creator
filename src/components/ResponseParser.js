var attributePatterns = require('../other/attributePatternsShort').default;
import {each, isNumber, isObject} from 'lodash';
import find2 from 'lodash/find';
import has from 'lodash/has';
import Utils from '../other/Utils'
var cssValues = require('css-values');
var valueParser = require('postcss-value-parser');

console.log(attributePatterns);

export default class ResponseParser {
    // static parse(response) {
    //     const rawStyles = this.getRawStyles(response);
    //     const newStyles = this.processRawStyles(rawStyles);
    //
    //     return newStyles;
    // }

    static isNumeric(x) {
        return !(isNaN(x)) && (typeof x !== "object") &&
            (x != Number.POSITIVE_INFINITY) && (x != Number.NEGATIVE_INFINITY);
    }

    static getRawStyles(response) {
        const rawStyles = {
            attributes: [],
            values: [],
            units: []
        };

        if (has(response.entities, 'attribute')) {
            each(response.entities.attribute, function (attribute) {
                rawStyles.attributes.push(Utils.dashToCamelCase(attribute.value));
            }.bind(this));
        }

        if (has(response.entities, 'unit')) {
            each(response.entities.unit, function (unit) {
                rawStyles.units.push(unit.value);
            }.bind(this));
        }

        if (has(response.entities, 'value')) {
            each(response.entities.value, function (value) {
                rawStyles.values.push(value.value);
            }.bind(this));
        }

        if (rawStyles.attributes.length > 1) {
            throw {
                message: 'Please enter only one characteristic at a time'
            };
        }

        return rawStyles;
    }

    static internalValidation(attribute, value) {
        const attributePattern = find2(attributePatterns, (item) => item.name === attribute);

        // window.find2 = find2;

        // window.FFF = attributePatterns;
        // debugger;

        if (attributePattern) {
            return true;
        }
        else {
            return false;
        }
    }

    static validateValue(attribute, value) {
        attribute = Utils.camelCaseToDash(attribute);
        const validationResult = cssValues.default(attribute, valueParser(value));
        if (!isObject(validationResult) || this.internalValidation(attribute, value)) {
            return true
        }
        else {
            throw {
                message: validationResult.message
            };
        }
    }

    static hasUnit(value) {
        return this.isNumeric(value);
    }

    static setValue(values, units) {
        let attributeValues = '';

        values.forEach((value, index, array) => {
                if (this.hasUnit(value)) {
                    if (units.length) {
                        attributeValues += value + units.shift();
                    }
                    else {
                        attributeValues += value + 'px';
                    }
                }
                else {
                    attributeValues += value;
                }

                if (index + 1 < values.length) {
                    attributeValues += ' ';
                }
            }
        );

        return attributeValues;
    }

    static processRawStyles(rawStyles) {
        const newStyles = {};

        const attribute = rawStyles.attributes[0];

        newStyles[attribute.trim()] = this.setValue(rawStyles.values, rawStyles.units);
        this.validateValue(attribute.trim(), newStyles[attribute.trim()]);

        // const attributePattern = find(attributePatterns, (item) => item.name === rawStyles.attributes[0]);
        //
        // if (attributePattern) {
        //     if (!attributePattern.hasUnit) {
        //         rawStyles.units.splice(index, 0, '')
        //     }
        // }

        // result.newStyles = this.setStyle(attribute, rawStyles.values[index], rawStyles.units[index], newStyles);

        return newStyles;
    }
}