import Intensity from '../fixtures/Intensity'
import {find as find2} from 'lodash';


/** Changes for example 'higher' to 'increase' */
export function translateDirection(direction) {
    return find2(Intensity.possibleDirections, function (item) {
        return item.name === direction;
    }).meaning;
}

/** Changes for example 'little' to '1' */
export function calculateFactor(direction, adjective) {
    const level = find2(Intensity.possibleAdjectives, function (item) {
        return item.name === adjective;
    }).meaning;

    switch(direction) {
        case Intensity.mainDirections.increase:
            return Intensity.factors.increaseFactors[level];
        case Intensity.mainDirections.decrease:
            return Intensity.factors.decreaseFactors[level];
        default:
            throw new Error('sorry I don\'t understand if I should decrease or increase the value');
    }
}