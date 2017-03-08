import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Wit} from 'node-wit';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import ButtonView from '../components/ButtonView.js';
import StoryInputView from '../components/StoryInputView.js';
import CodeView from '../components/CodeView.js';
import MessagesView from '../components/MessagesView.js';

import Intents from '../fixtures/Intents'

import * as MessageNormalizer from '../lib/MessageNormalizer';
import * as ResponseParser from '../lib/parsers/ResponseParser';
import * as RawStylesProcessor from '../lib/processors/RawStylesProcessor';
import * as RawIntensityProcessor from '../lib/processors/RawIntensityProcessor';
import * as RawTextProcessor from '../lib/processors/RawTextProcessor';
import * as RawClassProcessor from '../lib/processors/RawClassProcessor';
import * as RawUrlProcessor from '../lib/processors/RawUrlProcessor';
import * as actions from '../actions/index';
import * as constants from "./AppConstants";


class ButtonCreator extends Component {
    constructor(props) {
        super(props);

        this.witConfig = {accessToken: constants.WITAI_KEY, witURL: constants.WIT_URL};

        this.setMessage = this.setMessage.bind(this);
        this.getButtonHtml = this.getButtonHtml.bind(this);
        this.understandMessage = this.understandMessage.bind(this);
        this.processMessage = this.processMessage.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
        this.parse = this.parse.bind(this);
        this.expandMessages = this.expandMessages.bind(this);
        this.clearStyles = this.clearStyles.bind(this);
        this.processAttributeChange = this.processAttributeChange.bind(this);
        this.processIntensityChange = this.processIntensityChange.bind(this);
        this.processClassChange = this.processClassChange.bind(this);
        this.processLinkChange = this.processLinkChange.bind(this);
    }

    componentDidMount() {
        const buttonHtml = this.getButtonHtml();
        this.props.setButtonHtml(buttonHtml);

        const styles = this.updateStyles(constants.INITIAL_STYLES);
        this.props.setStyles(styles);

        this.client = new Wit(this.witConfig);
    }

    getButtonHtml(text, cssClass, url) {
        text = text ? text : this.props.state.buttonText;
        cssClass = cssClass ? cssClass : this.props.state.buttonCssClass;
        url = url ? url : this.props.state.buttonUrl;

        return `<button class="${ cssClass }" onclick="location.href = '${ url }';">${ text }</button>`;
    }

    setMessage(message) {
        this.props.setMessage(message);
    }

    processMessage(message) {
        const normalizedMessage = MessageNormalizer.normalize(message);
        this.understandMessage(normalizedMessage);
        this.updateMessages(message, constants.USER);
    }

    understandMessage(message) {
        this.client.message(message, {})
            .then((response) => {
                this.parse(response);
            }, () => {
                this.updateMessages('sorry, we couldn\'t connect to our language parser', constants.APP);
            })
            .catch(console.error);
    }

    parse(response) {
        try {
            const intent = ResponseParser.getIntent(response);

            switch (intent) {
                case Intents.possibleIntents.changeAttribute:
                    this.processAttributeChange(response);
                    break;
                case  Intents.possibleIntents.changeValue:
                    this.processIntensityChange(response);
                    break;
                case Intents.possibleIntents.changeClass:
                    this.processClassChange(response);
                    break;
                case Intents.possibleIntents.changeText:
                    this.processTextChange(response);
                    break;
                case Intents.possibleIntents.changeLink:
                    this.processLinkChange(response);
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            this.updateMessages(error.message, constants.APP);
        }
    }

    processAttributeChange(response) {
        const rawStyles = ResponseParser.getRawStyles(response);
        const normalizedRawStyle = RawStylesProcessor.normalize(rawStyles);
        const newStyle = RawStylesProcessor.process(normalizedRawStyle);
        const newStyles = this.updateStyles(newStyle);

        this.props.updateStyles(rawStyles, normalizedRawStyle, newStyles);

        this.updateMessages('Done!', constants.APP);
    }

    processIntensityChange(response) {
        const rawIntensity = ResponseParser.getRawIntensity(response);
        const normalizedStyle = RawIntensityProcessor.process(rawIntensity, this.props.state.currentStyle);
        const newStyle = RawStylesProcessor.process(normalizedStyle);
        const newStyles = this.updateStyles(newStyle);

        this.props.updateRawIntensity(rawIntensity, normalizedStyle, newStyles);

        this.updateMessages('Done!', constants.APP);
    }

    processLinkChange(response) {
        const rawUrl = ResponseParser.getRawUrl(response);
        const newUrl = RawUrlProcessor.process(rawUrl);
        const buttonHtml = this.getButtonHtml(this.props.state.buttonText, this.props.state.buttonCssClass, newUrl);

        this.props.updateButtonProps(buttonHtml, this.props.state.buttonText, this.props.state.buttonCssClass, newUrl);

        this.updateMessages('Done!', constants.APP);
    }

    processClassChange(response) {
        const rawClass = ResponseParser.getRawClass(response);
        const newClass = RawClassProcessor.process(rawClass);
        const buttonHtml = this.getButtonHtml(this.props.state.buttonText, newClass, this.props.state.buttonUrl);

        this.props.updateButtonProps(buttonHtml, this.props.state.buttonText, newClass, this.props.state.buttonUrl);

        this.updateMessages('Done!', constants.APP);
    }

    processTextChange(response) {
        const rawText = ResponseParser.getRawText(response);
        const newText = RawTextProcessor.process(rawText);
        const buttonHtml = this.getButtonHtml(newText, this.props.state.buttonCssClass, this.props.state.buttonUrl);

        this.props.updateButtonProps(buttonHtml, newText, this.props.state.buttonCssClass, this.props.state.buttonUrl);

        this.updateMessages('Done!', constants.APP);
    }

    expandMessages() {
        this.props.setExpandMessages(true);
    }

    clearStyles() {
        this.props.setStyles(constants.INITIAL_STYLES);
        this.updateMessages('restored default styles', constants.APP);
    }

    updateMessages(message, sender) {
        const messages = [...this.props.state.messages];
        messages.push({
            'body': message,
            'sender': sender
        });
        this.props.setMessages(messages);
    }

    updateStyles(newStyles) {
        const styles = {
            ...this.props.state.styles
        };

        Object.keys(newStyles).forEach((key) => {
            styles[key] = newStyles[key];
        });

        return styles;
    }

    render() {
        return (
            <Layout>
                <NavBar />
                <ButtonView buttonHtml={this.props.state.buttonHtml}
                            styles={this.props.state.styles}
                            buttonText={this.props.state.buttonText}
                            buttonCssClass={this.props.state.buttonCssClass}
                            buttonUrl={this.props.state.buttonUrl}
                            message={this.props.state.message}/>
                <MessagesView messages={this.props.state.messages}
                              expandMessages={this.props.state.expandMessages}/>
                <StoryInputView setMessage={this.setMessage}
                                processMessage={this.processMessage}
                                expandMessages={this.expandMessages}
                                showClearStylesButton={this.props.state.expandMessages}
                                clearStyles={this.clearStyles}
                                message={this.props.state.message}/>
                <CodeView rawStyles={this.props.state.rawStyles}
                          rawValues={this.props.state.rawValues}
                          buttonHtml={this.props.state.buttonHtml}
                          styles={this.props.state.styles}/>
                <Footer />
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setButtonText: (buttonText) => {
            dispatch(actions.setButtonText(buttonText))
        },
        setRawStyles: (rawStyles) => {
            dispatch(actions.setRawStyles(rawStyles))
        },
        setStyles: (styles) => {
            dispatch(actions.setStyles(styles))
        },
        setRawIntensity: (rawIntensity) => {
            dispatch(actions.setRawIntensity(rawIntensity))
        },
        setCurrentStyle: (currentStyle) => {
            dispatch(actions.setCurrentStyle(currentStyle))
        },
        setMessages: (messages) => {
            dispatch(actions.setMessages(messages))
        },
        setMessage: (message) => {
            dispatch(actions.setMessage(message))
        },
        setButtonHtml: (buttonHtml) => {
            dispatch(actions.setButtonHtml(buttonHtml))
        },
        setExpandMessages: (expandMessages) => {
            dispatch(actions.setExpandMessages(expandMessages))
        },
        updateStyles: (rawStyles, currentStyle, styles) => {
            dispatch(actions.updateStyles(rawStyles, currentStyle, styles))
        },
        updateRawIntensity: (rawIntensity, currentStyle, styles) => {
            dispatch(actions.updateRawIntensity(rawIntensity, currentStyle, styles))
        },
        updateButtonProps: (buttonHtml, buttonText, buttonCssClass, buttonUrl) => {
            dispatch(actions.updateButtonProps(buttonHtml, buttonText, buttonCssClass, buttonUrl))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonCreator);
