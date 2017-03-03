import {isEmpty} from 'lodash';
import DirectionTranslator from './IntensityTranslator'
import RawStylesProcessor from '../components/RawStylesProcessor'
import Intensity from '../components/Intensity'

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

        // newStyles[previousStyle.property] = RawStylesProcessor.setValue(newValues);
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
        return values.map( (item) => ({...item, value: item.value * factor}) );
    }
}