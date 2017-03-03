import {each} from 'lodash';

export default class Utils {
    /** Converts background-color -> backgroundColor */
    static dashToCamelCase(property) {
        return property.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        })
    }

    /** Converts backgroundColor -> background-color */
    static camelCaseToDash(property) {
        return property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    /** Converts all properties in the JSON of styles */
    static convertStylesAttributes(styles) {
        const newStyles =  {
            ...styles
        };
        each(newStyles, function (value, property) {
            const newProperty = Utils.camelCaseToDash(property);
            newStyles[newProperty] = newStyles[property];
            if(property !== newProperty) {
                delete newStyles[property];
            }
        });
        return newStyles;
    }

    /** Checks if value is numeric */
    static isNumeric(x) {
        return !(isNaN(x)) && (typeof x !== "object") &&
            (x !== Number.POSITIVE_INFINITY) && (x !== Number.NEGATIVE_INFINITY);
    }
}