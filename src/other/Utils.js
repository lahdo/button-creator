import {each} from 'lodash';

export default class Utils {
    /** Converts background-color -> backgroundColor */
    static dashToCamelCase(attribute) {
        return attribute.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        })
    }

    /** Converts backgroundColor -> background-color */
    static camelCaseToDash(attribute) {
        return attribute.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    /** Converts all attributes in the JSON of styles */
    static convertStylesAttributes(styles) {
        const newStyles =  {
            ...styles
        };
        each(newStyles, function (value, attribute) {
            const newAttribute = Utils.camelCaseToDash(attribute);
            newStyles[newAttribute] = newStyles[attribute];
            if(attribute !== newAttribute) {
                delete newStyles[attribute];
            }
        });
        return newStyles;
    }
}