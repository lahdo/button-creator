import {each} from 'lodash';

/** Converts background-color -> backgroundColor */
export function dashToCamelCase(property) {
    return property.replace(/-([a-z])/gi, function (s, group1) {
        return group1.toUpperCase();
    })
}

/** Converts backgroundColor -> background-color */
export function camelCaseToDash(property) {
    return property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/** Converts all properties in the JSON of styles */
export function convertStylesAttributes(styles) {
    const newStyles = {
        ...styles
    };
    each(newStyles, function (value, property) {
        const newProperty = camelCaseToDash(property);
        newStyles[newProperty] = newStyles[property];
        if (property !== newProperty) {
            delete newStyles[property];
        }
    });
    return newStyles;
}

/** Checks if value is numeric */
export function isNumeric(potentialNumber) {
    return !(isNaN(potentialNumber)) && (typeof potentialNumber !== "object") &&
        (potentialNumber !== Number.POSITIVE_INFINITY) && (potentialNumber !== Number.NEGATIVE_INFINITY);
}

/** Converts http://google.pl/ to -> //google.pl */
export function normalizeUrl(url) {
    return '//' + url.replace("://", "").replace("https", "").replace("http", "");
}