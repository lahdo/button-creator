import {each} from 'lodash';
import has from 'lodash/has';
import * as Utils from '../Utils'
import Intents from '../../fixtures/Intents'

export function getIntent(response) {
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

export function getRawStyles(response) {
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

export function getRawIntensity(response) {
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

export function getRawText(response) {
    const rawText = {
        texts: []
    };

    if (has(response.entities, 'message_body')) {
        each(response.entities.message_body, function (text) {
            rawText.texts.push(text.value);
        });
    }

    return rawText;
}
