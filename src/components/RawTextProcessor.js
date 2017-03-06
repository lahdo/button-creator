import {isEmpty} from 'lodash';

export default class RawTextProcessor {
    static process(rawText) {
        if (!rawText.texts[0].length) {
            throw new Error('sorry the new text is too short');
        }

        return rawText.texts[0];
    }
}