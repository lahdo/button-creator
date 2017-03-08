import * as actionNames from '../actions/actionsNames';

const initialState = {
    styles: {},
    rawStyles: {},
    rawIntensity: {},
    currentStyle: {},
    messages: [],
    buttonHtml: '',
    buttonCssClass: 'my-button',
    buttonText: 'Your Button',
    buttonUrl: '',
    message: '',
    expandMessages: false
};

export function buttonCreatorApp(state = initialState, action) {
    switch (action.type) {
        case actionNames.SET_BUTTON_TEXT:
            return {
                ...state,
                buttonText: action.buttonText,
            };
        case actionNames.SET_RAW_STYLES:
            return {
                ...state,
                rawStyles: action.rawStyles,
            };
        case actionNames.SET_STYLES:
            return {
                ...state,
                styles: action.styles,
            };
        case actionNames.SET_RAW_INTENSITY:
            return {
                ...state,
                rawIntensity: action.rawIntensity,
            };
        case actionNames.SET_CURRENT_STYLE:
            return {
                ...state,
                currentStyle: action.currentStyle,
            };
        case actionNames.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            };
        case actionNames.SET_MESSAGE:
            return {
                ...state,
                message: action.message,
            };
        case actionNames.SET_BUTTON_HTML:
            return {
                ...state,
                buttonHtml: action.buttonHtml,
            };
        case actionNames.SET_EXPAND_MESSAGES:
            return {
                ...state,
                expandMessages: action.expandMessages,
            };
        case actionNames.UPDATE_STYLES:
            return {
                ...state,
                rawStyles: action.rawStyles,
                currentStyle: action.currentStyle,
                styles: action.styles
            };
        case actionNames.UPDATE_RAW_INTENSITY:
            return {
                ...state,
                rawIntensity: action.rawIntensity,
                currentStyle: action.currentStyle,
                styles: action.styles
            };
        case actionNames.UPDATE_BUTTON_PROPS:
            return {
                ...state,
                buttonHtml: action.buttonHtml,
                buttonText: action.buttonText,
                buttonCssClass: action.buttonCssClass,
                buttonUrl: action.buttonUrl
            };
        default:
            return state;
    }
}
