// import {isEmpty} from 'lodash';

export function process(rawCss) {
    if (!rawCss.cssClasses.length || !rawCss.cssClasses[0].length) {
        throw new Error('sorry the new css class is too short');
    }

    return rawCss.cssClasses[0];
}
