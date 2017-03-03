var attributePatterns = require('../other/attributePatternsShort').default;
import {each, isNumber, isObject, isEmpty} from 'lodash';
import find2 from 'lodash/find';
import has from 'lodash/has';
import Utils from '../other/Utils'
import Intents from '../components/Intents'
import Intensity from '../components/Intensity'
import DirectionTranslator from '../components/DirectionTranslator'
var cssValues = require('css-values');
var valueParser = require('postcss-value-parser');


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

    static getIntent(response) {
        let intent = '';

        if (has(response.entities, 'intent') && response.entities.intent[0].value) {
            each(Intents.possibleIntents, function (intent_) {
                if (intent_ === response.entities.intent[0].value) {
                    intent = intent_;
                    return true;
                }
            }.bind(this));
        }

        if (!intent || 0 === intent.length) {
            intent = Intents.defaultIntent;
        }

        return intent;
    }

    static getRawValues(response) {
        const rawValues = {
            adjectives: [],
            directions: []
        };

        if (has(response.entities, 'adjective')) {
            each(response.entities.adjective, function (adjective) {
                rawValues.adjectives.push(adjective.value);
            }.bind(this));
        }

        if (has(response.entities, 'direction')) {
            each(response.entities.direction, function (direction) {
                rawValues.directions.push(direction.value);
            }.bind(this));
        }

        // if (has(response.entities, 'value')) {
        //     each(response.entities.value, function (value) {
        //         rawValues.values.push(value.value);
        //     }.bind(this));
        // }

        // if (rawValues.directions.length > 1) {
        //     throw {
        //         message: 'please enter only one characteristic at a time'
        //     };
        // }

        return rawValues;
    }

    static processRawIntensity(rawValues, previousStyle) {
        if (isEmpty(previousStyle)) {
            throw {
                message: 'sorry I don\'t understand what do you want to change'
            };
        }

        const newStyles = {};
        const direction = rawValues.directions[0];
        const attribute = previousStyle[Object.keys(previousStyle)[0]];
        const value = previousStyle[attribute];
        let newValue = 0;
        let translatedDirection = {};

        if (direction) {
            translatedDirection = DirectionTranslator.translate(direction);
        }
        else {
            throw {
                message: 'sorry I don\'t understand what do you want to change'
            };
        }

        if(translatedDirection === Intensity.mainDirections.increase) {
            newStyles[attribute] = this.setValue(rawValues.values, rawValues.units);
            this.validateValue(attribute, newStyles[previousStyle.trim()]);
        }
        else if (translatedDirection === Intensity.mainDirections.decrease) {

        }
        else {
            throw {
                message: 'sorry I don\'t understand if I should increase or decrease the value'
            };
        }

        return newStyles;
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

    static processRawStyles(rawStyles) {
        const newStyles = {};

        const attribute = rawStyles.attributes[0];

        if (attribute) {
            newStyles[attribute.trim()] = this.setValue(rawStyles.values, rawStyles.units);
            this.validateValue(attribute.trim(), newStyles[attribute.trim()]);
        }
        else {
            throw {
                message: 'sorry I don\'t understand what do you want to change'
            };
        }

        return newStyles;
    }

    static internalValidation(attribute, value) {
        const attributePattern = find2(attributePatterns, (item) => item.name === attribute);

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
}