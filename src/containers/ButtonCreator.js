import React, {Component} from 'react';
import {Wit} from 'node-wit';
// import {each} from 'lodash';
// import {find} from 'lodash';
// import has from 'lodash/has';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import ButtonView from '../components/ButtonView.js';
import StoryInputView from '../components/StoryInputView.js';
import CodeView from '../components/CodeView.js';
import MessagesView from '../components/MessagesView.js';
import MessageNormalizer from '../components/MessageNormalizer';
import ResponseParser from '../components/ResponseParser';
import RawStylesProcessor from '../components/RawStylesProcessor';
import RawIntensityProcessor from '../components/RawIntensityProcessor';
import RawTextProcessor from '../components/RawTextProcessor';

import Intents from '../components/Intents'

const WITAIKEY = 'PU3QOHZ5YLQ364OR4PVTGLVWO5SKS5K3';
const WITURL = 'https://cors-anywhere.herokuapp.com/https://api.wit.ai';
const APP = 'app';
const USER = 'user';

export default class ButtonCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonHtml: '',
            styles: {},
            rawStyles: {},
            rawIntensity: {},
            currentStyle: {},
            message: '',
            buttonText: 'Your Button',
            messages: [],
            context: {},
            expandMessages: false,
        };

        this.initialStyles = {
            'width': '240px',
            'height': '80px',
            'borderWidth': '3px',
            'fontSize': '23px'
        };

        this.initialHtml = '<button class="my-button"></button>';
        this.witConfig = {accessToken: WITAIKEY, witURL: WITURL};

        this.setMessage = this.setMessage.bind(this);
        this.setButtonText = this.setButtonText.bind(this);
        this.understandMessage = this.understandMessage.bind(this);
        this.processMessage = this.processMessage.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
        this.parse = this.parse.bind(this);
        this.expandMessages = this.expandMessages.bind(this);
        this.clearStyles = this.clearStyles.bind(this);
        this.processChangeAttribute = this.processChangeAttribute.bind(this);
        this.processChangeIntensity = this.processChangeIntensity.bind(this);
        this.processChangeClass = this.processChangeClass.bind(this);

    }

    componentDidMount() {
        this.setState({'buttonHtml': this.initialHtml});
        this.updateStyles(this.initialStyles);
        this.client = new Wit(this.witConfig);
    }

    setButtonText(text) {
        this.setState({'buttonText': text});
    }

    setMessage(message) {
        this.setState({'message': message});
    }

    processMessage(message) {
        const normalizedMessage = MessageNormalizer.normalize(message);
        this.understandMessage(normalizedMessage);
        this.updateMessages(message, USER);
    }

    understandMessage(message) {
        this.client.message(message, {})
            .then((response) => {
                this.parse(response);
            }, () => {
                this.updateMessages('sorry, we couldn\'t connect to our language parser', APP);
            })
            .catch(console.error);
    }

    parse(response) {
        try {
            const intent = ResponseParser.getIntent(response);

            if (intent === Intents.possibleIntents.changeAttribute) {
                this.processChangeAttribute(response);
            }
            else if (intent === Intents.possibleIntents.changeValue) {
                this.processChangeIntensity(response);
            }
            else if (intent === Intents.possibleIntents.changeClass) {
                this.processChangeClass(response);
            }
            else if (intent === Intents.possibleIntents.changeText) {
                this.processChangeText(response);
            }
        }
        catch (error) {
            this.updateMessages(error.message, APP);
        }
    }

    processChangeAttribute(response) {
        const rawStyles = ResponseParser.getRawStyles(response);
        this.setState({'rawStyles': rawStyles});

        const normalizedRawStyle = RawStylesProcessor.normalize(rawStyles);
        this.setState({'currentStyle': normalizedRawStyle});

        const newStyle = RawStylesProcessor.process(normalizedRawStyle);
        this.updateStyles(newStyle);

        this.updateMessages('Done!', APP);
    }

    processChangeIntensity(response) {
        const rawIntensity = ResponseParser.getRawIntensity(response);
        this.setState({'rawIntensity': rawIntensity});

        const normalizedStyle = RawIntensityProcessor.process(rawIntensity, this.state.currentStyle);
        this.setState({'currentStyle': normalizedStyle});

        const newStyle = RawStylesProcessor.process(normalizedStyle);
        this.updateStyles(newStyle);

        this.updateMessages('Done!', APP);
    }

    processChangeClass(response) {
        const rawStyles = ResponseParser.getRawStyles(response);
        this.setState({'rawStyles': rawStyles});

        const newStyles = ResponseParser.processRawStyles(rawStyles);
        this.updateStyles(newStyles);
        this.updateMessages('Done!', APP);
    }

    processChangeText(response) {
        const rawText = ResponseParser.getRawText(response);

        const newText = RawTextProcessor.process(rawText);
        this.setButtonText(newText);
        this.updateMessages('Done!', APP);
    }

    expandMessages() {
        this.setState({'expandMessages': true});
    }

    clearStyles() {
        this.setState({'styles': this.initialStyles});
        this.updateMessages('restored default styles', APP);
    }

    updateMessages(message, sender) {
        const messages = [...this.state.messages];
        messages.push({
            'body': message,
            'sender': sender
        });
        this.setState({'messages': messages});
    }

    updateStyles(newStyles) {
        const styles = {
            ...this.state.styles
        };

        Object.keys(newStyles).forEach((key) => {
            styles[key] = newStyles[key];
        });

        this.setState({'styles': styles});
    }

    render() {
        return (
            <Layout>
                <NavBar />
                <ButtonView buttonHtml={this.state.buttonHtml}
                            styles={this.state.styles}
                            buttonText={this.state.buttonText}
                            message={this.state.message}/>
                <MessagesView messages={this.state.messages}
                              expandMessages={this.state.expandMessages}/>
                <StoryInputView setMessage={this.setMessage}
                                processMessage={this.processMessage}
                                expandMessages={this.expandMessages}
                                showClearStylesButton={this.state.expandMessages}
                                clearStyles={this.clearStyles}
                                message={this.state.message}/>
                <CodeView rawStyles={this.state.rawStyles}
                          rawValues={this.state.rawValues}
                          buttonHtml={this.state.buttonHtml}
                          styles={this.state.styles}/>
                <Footer />
            </Layout>
        );
    }
}



