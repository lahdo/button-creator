// import {each, isObject, isEmpty} from 'lodash';
import Utils from '../other/Utils'
import CSSValidator from '../components/CSSValidator'

export default class RawStylesProcessor {
    static process(normalizedStyles) {
        const newStyles = {};

        newStyles[normalizedStyles.property] = this.setValue(normalizedStyles.values);
        CSSValidator.validate(normalizedStyles.property, newStyles[normalizedStyles.property]);

        return newStyles;
    }

    static normalize(rawStyles) {
        let normalizedRawStyles = {};

        let property = rawStyles.properties[0];

        if (property) {
            property = property.trim();
            normalizedRawStyles = this.normalizeRawStyles(property, rawStyles.values, rawStyles.units);
        }
        else {
            throw new Error('sorry I don\'t understand. What do you want to change?');
        }

        return normalizedRawStyles;
    }

    static hasUnit(value) {
        return Utils.isNumeric(value);
    }

    static normalizeRawStyles(property, values, units) {
        let normalizedRawStyles = {
            property: property,
            values: []
        };

        values.forEach((value, index, array) => {
                if (this.hasUnit(value)) {
                    if (units.length) {
                        normalizedRawStyles.values.push({
                            value: value,
                            unit: units.shift()
                        });
                    }
                    else {
                        normalizedRawStyles.values.push({
                            value: value,
                            unit: 'px'
                        });
                    }
                }
                else {
                    normalizedRawStyles.values.push({
                        value: value,
                        unit: ''
                    });
                }
            }
        );

        return normalizedRawStyles;
    }

    static setValue(values) {
        let propertyValues = '';

        values.forEach((item, index, array) => {
                propertyValues += item.value + item.unit;

                if (index + 1 < values.length) {
                    propertyValues += ' ';
                }
            }
        );

        return propertyValues;
    }
}