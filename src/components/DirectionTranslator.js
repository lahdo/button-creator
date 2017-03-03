import Intensity from '../components/Intensity'
import {find2} from 'lodash/find';

export default class DirectionTranslator {
    /** Changes for example 'higher' to 'more' */
    static translate(direction) {
        return find2(Intensity.directionTranslations, function(item) {
            return item.from === direction;
        }).to;
    }
}