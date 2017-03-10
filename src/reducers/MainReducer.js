import * as Actions from '../actions/Actions';

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
    expandMessages: false,
    showSpeakButton: true
};

export default function MainReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_BUTTON_TEXT:
            return {
                ...state,
                buttonText: action.buttonText,
            };
        case Actions.SET_RAW_STYLES:
            return {
                ...state,
                rawStyles: action.rawStyles,
            };
        case Actions.SET_STYLES:
            return {
                ...state,
                styles: action.styles,
            };
        case Actions.SET_RAW_INTENSITY:
            return {
                ...state,
                rawIntensity: action.rawIntensity,
            };
        case Actions.SET_CURRENT_STYLE:
            return {
                ...state,
                currentStyle: action.currentStyle,
            };
        case Actions.SET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            };
        case Actions.SET_MESSAGE:
            return {
                ...state,
                message: action.message,
            };
        case Actions.SET_BUTTON_HTML:
            return {
                ...state,
                buttonHtml: action.buttonHtml,
            };
        case Actions.SET_EXPAND_MESSAGES:
            return {
                ...state,
                expandMessages: action.expandMessages,
            };
        case Actions.SET_SHOW_SPEAK_BUTTON:
            return {
                ...state,
                showSpeakButton: action.showSpeakButton,
            };
        case Actions.UPDATE_STYLES:
            return {
                ...state,
                rawStyles: action.rawStyles,
                currentStyle: action.currentStyle,
                styles: action.styles
            };
        case Actions.UPDATE_RAW_INTENSITY:
            return {
                ...state,
                rawIntensity: action.rawIntensity,
                currentStyle: action.currentStyle,
                styles: action.styles
            };
        case Actions.UPDATE_BUTTON_PROPS:
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
};