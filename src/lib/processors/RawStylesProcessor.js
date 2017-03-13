import * as Utils from '../Utils';
import * as CSSValidator from '../CSSValidator';

export function process(normalizedStyles) {
    const newStyles = {};

    newStyles[normalizedStyles.property] = this.setValue(normalizedStyles.values);
    CSSValidator.validate(normalizedStyles.property, newStyles[normalizedStyles.property]);

    return newStyles;
}

export function normalize(rawStyles) {
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

export function hasUnit(value) {
    return Utils.isNumeric(value);
}

export function normalizeValues(values, units) {
    values.forEach((value, index, array) => {
            let [val, unit] = value.match(/[a-zA-Z]+|[0-9]+/g);
            values[index] = val;
            if (unit) {
                units.push(unit);
            }
        }
    );

    return [values, units];
}

export function normalizeRawStyles(property, values, units) {
    let normalizedRawStyles = {
        property: property,
        values: []
    };

    [values, units] = this.normalizeValues(values, units);

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

export function setValue(values) {
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
