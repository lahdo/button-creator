import keywordsToReplace from '../fixtures/KeywordsToReplace';
import keywordsToReplace2 from '../fixtures/KeywordsToReplace2';

    /** Changes background color -> background-color, and deletes unwanted characters  */
    export function normalize(message) {
        /** Changes background color -> background-color **/
        keywordsToReplace.forEach((keyword) => {
            const re = new RegExp(`(${keyword.from})`, 'gi'); /*  /(border color)/gi  */
            message = message.replace(re, keyword.to);
        });

        //** Deletes unwanted characters  */
        message = message.replace(/[;]/g, ""); // |&;$%@"<>()+,

        //** Changes pixels -> px  */
        keywordsToReplace2.forEach((keyword) => {
            const re = new RegExp(`(${keyword.from})`, 'gi'); /*  /(pixels)/gi  */
            message = message.replace(re, keyword.to);
        });

        return message;
    }
