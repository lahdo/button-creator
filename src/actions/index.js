import * as Actions from "./Actions";

export function setButtonText(buttonText) {
    return {
        type: Actions.SET_BUTTON_TEXT,
        buttonText,
    };
}

export function setRawStyles(rawStyles) {
    return {
        type: Actions.SET_RAW_STYLES,
        rawStyles,
    };
}

export function setStyles(styles) {
    return {
        type: Actions.SET_STYLES,
        styles,
    };
}

export function setRawIntensity(rawIntensity) {
    return {
        type: Actions.SET_RAW_INTENSITY,
        rawIntensity,
    };
}

export function setCurrentStyle(currentStyle) {
    return {
        type: Actions.SET_CURRENT_STYLE,
        currentStyle,
    };
}

export function setMessages(messages) {
    return {
        type: Actions.SET_MESSAGES,
        messages,
    };
}

export function setMessage(message) {
    return {
        type: Actions.SET_MESSAGE,
        message,
    };
}

export function setButtonHtml(buttonHtml) {
    return {
        type: Actions.SET_BUTTON_HTML,
        buttonHtml,
    };
}

export function setExpandMessages(expandMessages) {
    return {
        type: Actions.SET_EXPAND_MESSAGES,
        expandMessages,
    };
}

export function setShowSpeakButton(showSpeakButton) {
    return {
        type: Actions.SET_SHOW_SPEAK_BUTTON,
        showSpeakButton,
    };
}

export function updateStyles(rawStyles, currentStyle, styles) {
    return {
        type: Actions.UPDATE_STYLES,
        rawStyles, currentStyle, styles
    };
}

export function updateRawIntensity(rawIntensity, currentStyle, styles) {
    return {
        type: Actions.UPDATE_RAW_INTENSITY,
        rawIntensity, currentStyle, styles
    };
}

export function updateButtonProps(buttonHtml, buttonText, buttonCssClass, buttonUrl) {
    return {
        type: Actions.UPDATE_BUTTON_PROPS,
        buttonHtml, buttonText, buttonCssClass, buttonUrl
    };
}