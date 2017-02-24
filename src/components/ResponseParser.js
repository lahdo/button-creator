import cssAttributes from '../other/cssAttributesShort';
import {each} from 'lodash';
import has from 'lodash/has';

export default class ResponseParser {
    static getRawStyles(response) {
        const rawStyles = {
            attributes: [],
            values: [],
            units: []
        };

        if (has(response.entities, 'attribute')) {
            each(response.entities.attribute, function (attribute) {
                rawStyles.attributes.push(this.convertAttribute(attribute.value));
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

    static processRawStyles(rawStyles) {
        const newStyles = {};

        each(rawStyles.attributes, function (attribute, index) {
            const currentAttribute = find(cssAttributes, (item) => item.name === attribute);

            if (currentAttribute && !currentAttribute.hasUnit) {
                rawStyles.units.splice(index, 0, '')
            }

            if (rawStyles.units[index]) {
                newStyles[attribute] = rawStyles.values[index] + rawStyles.units[index];
            }
            else {
                newStyles[attribute] = rawStyles.values[index];
            }

        }.bind(this));

        return newStyles;
    }

    static parse(response) {
        const rawStyles = this.getRawStyles(response);
        const newStyles = this.processRawStyles(rawStyles);

        return newStyles;
    }

    static convertAttribute(attribute) {
        return attribute.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        })
    }
}