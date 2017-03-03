import {each} from 'lodash';
import has from 'lodash/has';
import Utils from '../other/Utils'
import Intents from '../components/Intents'

export default class ResponseParser {
    static getIntent(response) {
        let intent = '';

        if (has(response.entities, 'intent') && response.entities.intent[0].value) {
            each(Intents.possibleIntents, function (intent_) {
                if (intent_ === response.entities.intent[0].value) {
                    intent = intent_;
                    return true;
                }
            });
        }

        if (!intent || 0 === intent.length) {
            intent = Intents.defaultIntent;
        }

        return intent;
    }

    static getRawStyles(response) {
        const rawStyles = {
            properties: [],
            values: [],
            units: []
        };

        if (has(response.entities, 'attribute')) {
            each(response.entities.attribute, function (property) {
                rawStyles.properties.push(Utils.dashToCamelCase(property.value));
            });
        }

        if (has(response.entities, 'unit')) {
            each(response.entities.unit, function (unit) {
                rawStyles.units.push(unit.value);
            });
        }

        if (has(response.entities, 'value')) {
            each(response.entities.value, function (value) {
                rawStyles.values.push(value.value);
            });
        }

        if (rawStyles.properties.length > 1) {
            throw new Error('Please enter only one characteristic at a time');
        }

        return rawStyles;
    }

    static getRawIntensity(response) {
        const rawIntensities = {
            adjectives: [],
            directions: []
        };

        if (has(response.entities, 'adjective')) {
            each(response.entities.adjective, function (adjective) {
                rawIntensities.adjectives.push(adjective.value);
            });
        }

        if (has(response.entities, 'direction')) {
            each(response.entities.direction, function (direction) {
                rawIntensities.directions.push(direction.value);
            });
        }

        return rawIntensities;
    }
}