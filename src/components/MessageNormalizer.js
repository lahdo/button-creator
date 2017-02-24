import keywordsToReplace from '../other/keywordsToReplace';

export default class MessageNormalizer {
    /** Changes background color -> background-color */
    static normalize(message) {
        keywordsToReplace.forEach((keyword) => {
            const re = new RegExp(`(${keyword.from})`, 'gi'); /*  /(border color)/gi  */
            message = message.replace(re, keyword.to);
        });
        return message;
    }
}