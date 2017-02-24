import attributePatterns from '../other/attributePatternsShort';
import {each, isNumber, isObject} from 'lodash';
import has from 'lodash/has';
import Utils from '../other/Utils'
var cssValues = require('css-values');
var valueParser = require('postcss-value-parser');

export default class ResponseParser {
    // static parse(response) {
    //     const rawStyles = this.getRawStyles(response);
    //     const newStyles = this.processRawStyles(rawStyles);
    //
    //     return newStyles;
    // }

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

        return rawStyles;
    }
    
    static getValues(values, units, attributePattern) {
        var currentValues = [];
        attributePattern.expectNoOfValues = attributePattern.expectNoOfValues.reverse();

        attributePattern.expectNoOfValues.forEach((expectedNoOfValue) => {
            if(expectedNoOfValue && values.length > 3) {
                if(this.validateValue(values[0])
                && this.validateValue(values[1])
                && this.validateValue(values[2])
                && this.validateValue(values[3])) {
                    currentValues = values.slice(0, 5);
                    values = values.slice(5, values.length + 1);
                }
            }
        });
    }

    static validateValue(value, attributePattern) {
        if(attributePattern.canBeText) {
            return true;
        }
        else if (attributePattern.canBeNumber && isNumber(value)) {
            return true;
        }
        else if (attributePattern.possibleValues.includes(value)) {
            return true;
        }
        else {
            return false;
        }
    }

    static processRawStyles(rawStyles) {
        const newStyles = {};

        each(rawStyles.attributes, function (attribute, index) {
            const attributePattern = find(attributePatterns, (item) => item.name === attribute);

            if (attributePattern) {
                if(attributePattern.expectNoOfValues)

                if (!attributePattern.hasUnit) {
                    rawStyles.units.splice(index, 0, '')
                }
            }


            if (rawStyles.units[index]) {
                if(!isObject(cssValues.default(Utils.camelCaseToDash(attribute), valueParser(rawStyles.values[index] + rawStyles.units[index])))) {
                    newStyles[attribute] = rawStyles.values[index] + rawStyles.units[index];
                }
            }
            else {
                if(!isObject(cssValues.default(Utils.camelCaseToDash(attribute), valueParser(rawStyles.values[index])))) {
                    newStyles[attribute] = rawStyles.values[index];
                }

            }

        }.bind(this));

        return newStyles;
    }
}