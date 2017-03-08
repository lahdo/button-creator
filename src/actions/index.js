import * as actionNames from "./actionsNames";

export function setButtonText(buttonText) {
    return {
        type: actionNames.SET_BUTTON_TEXT,
        buttonText,
    };
}

export function setRawStyles(rawStyles) {
    return {
        type: actionNames.SET_RAW_STYLES,
        rawStyles,
    };
}

export function setStyles(styles) {
    return {
        type: actionNames.SET_STYLES,
        styles,
    };
}

export function setRawIntensity(rawIntensity) {
    return {
        type: actionNames.SET_RAW_INTENSITY,
        rawIntensity,
    };
}

export function setCurrentStyle(currentStyle) {
    return {
        type: actionNames.SET_CURRENT_STYLE,
        currentStyle,
    };
}

export function setMessages(messages) {
    return {
        type: actionNames.SET_MESSAGES,
        messages,
    };
}

export function setMessage(message) {
    return {
        type: actionNames.SET_MESSAGE,
        message,
    };
}

export function setButtonHtml(buttonHtml) {
    return {
        type: actionNames.SET_BUTTON_HTML,
        buttonHtml,
    };
}

export function setExpandMessages(expandMessages) {
    return {
        type: actionNames.SET_EXPAND_MESSAGES,
        expandMessages,
    };
}

export function updateStyles(rawStyles, currentStyle, styles) {
    return {
        type: actionNames.UPDATE_STYLES,
        rawStyles, currentStyle, styles
    };
}

export function updateRawIntensity(rawIntensity, currentStyle, styles) {
    return {
        type: actionNames.UPDATE_RAW_INTENSITY,
        rawIntensity, currentStyle, styles
    };
}

export function updateButtonProps(buttonHtml, buttonText, buttonCssClass, buttonUrl) {
    return {
        type: actionNames.UPDATE_BUTTON_PROPS,
        buttonHtml, buttonText, buttonCssClass, buttonUrl
    };
}