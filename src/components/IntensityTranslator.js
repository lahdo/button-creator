import Intensity from '../components/Intensity'
import {find as find2} from 'lodash';

export default class IntensityTranslator {
    /** Changes for example 'higher' to 'increase' */
    static translateDirection(direction) {
        return find2(Intensity.possibleDirections, function (item) {
            return item.name === direction;
        }).meaning;
    }

    /** Changes for example 'little' to '1' */
    static calculateFactor(direction, adjective) {
        const level = find2(Intensity.possibleAdjectives, function (item) {
            return item.name === adjective;
        }).meaning;

        if (direction === Intensity.mainDirections.increase) {
            return Intensity.factors.increaseFactors[level];
        }
        else if (direction === Intensity.mainDirections.decrease) {
            return Intensity.factors.decreaseFactors[level];
        }
        else {
            throw new Error('sorry I don\'t understand if I should decrease or increase the value');
        }

    }
}