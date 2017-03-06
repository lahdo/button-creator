import {isEmpty} from 'lodash';
import DirectionTranslator from './IntensityTranslator'
import Intensity from '../components/Intensity'
import Utils from '../other/Utils';
import tinycolor from 'tinycolor2';

export default class RawIntensityProcessor {
    static process(rawIntensity, previousStyle) {
        const newStyles = {};

        if (isEmpty(previousStyle)) {
            throw new Error('sorry I don\'t understand what do you want to change');
        }

        const normalizedIntensity = this.normalize(rawIntensity);

        console.log(previousStyle.values);
        const newValues = this.updateValues(previousStyle.values, normalizedIntensity.factor);
        console.log(normalizedIntensity.factor);

        newStyles.property = previousStyle.property;
        newStyles.values = newValues;

        console.log(newValues);

        return newStyles;
    }

    static normalize(rawIntensity) {
        let normalizedIntensity = {};

        let direction = rawIntensity.directions[0];
        let adjective = rawIntensity.adjectives[0] ? rawIntensity.adjectives[0] : Intensity.defaultAdjective.name;

        if (direction) {
            direction = direction.trim();
            adjective = adjective.trim();
            normalizedIntensity = this.normalizeRawIntensity(direction, adjective);
        }
        else {
            throw new Error('sorry I don\'t understand. What do you want to change?');
        }

        return normalizedIntensity;
    }

    static normalizeRawIntensity(direction, adjective) {
        let normalizedIntensity = {};

        normalizedIntensity.direction = DirectionTranslator.translateDirection(direction);
        normalizedIntensity.factor = DirectionTranslator.calculateFactor(normalizedIntensity.direction, adjective);

        return normalizedIntensity;
    }

    static updateValues(values, factor) {
        return values.map((item) => ({...item, value: this.updateValue(item.value, factor)}));
    }

    static updateValue(value, factor) {
        const potentialColor = tinycolor(value);

        if (Utils.isNumeric(value)) {
            return value * factor;
        }
        else if (potentialColor.isValid()) {
            if (factor < 1) {
                const lightValue = this.getLightValue(factor, false);
                return potentialColor.lighten(lightValue);
            }
            else {
                const lightValue = this.getLightValue(factor, true);
                return potentialColor.darken(lightValue);
            }
        }
        else {
            throw new Error('sorry I don\'t understand. What do you want to change?');
        }
    }

    static getLightValue(factor, isdark = true) {
        const HIGH = 20;
        const LOW = 15;

        if (isdark) {
            if (factor > 1.5) {
                return HIGH;
            }
            else {
                return LOW;
            }
        }
        else {
            if (factor > 0.55) {
                return LOW;
            }
            else {
                return HIGH;
            }
        }
    }
}