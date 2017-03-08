// import {isEmpty} from 'lodash';

export function process(rawText) {
    if (!rawText.links.length || !rawText.links[0].length) {
        throw new Error('sorry the new text is too short');
    }

    return rawText.links[0];
}
