import React, {Component} from 'react';
import {each} from 'lodash';
import {Wit} from 'node-wit';
import {find} from 'lodash';
import has from 'lodash/has';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import ButtonView from '../components/ButtonView.js';
import StoryInputView from '../components/StoryInputView.js';
import CodeView from '../components/CodeView.js';
import MessagesView from '../components/MessagesView.js';
import MessageNormalizer from '../components/MessageNormalizer';
import ResponseParser from '../components/ResponseParser'

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
            message: '',
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

        this.setMessage = this.setMessage.bind(this);
        this.understandMessage = this.understandMessage.bind(this);
        this.processMessage = this.processMessage.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
        this.parse = this.parse.bind(this);
        this.expandMessages = this.expandMessages.bind(this);
        this.clearStyles = this.clearStyles.bind(this);
    }

    componentDidMount() {
        const initialHtml = '<button class="my-button"></button>';

        this.setState({'buttonHtml': initialHtml});
        this.updateStyles(this.initialStyles);
        this.client = new Wit({accessToken: WITAIKEY, witURL: WITURL});

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
                    this.updateMessages('Sorry, we couldn\'t connect to our language parser', APP);
                })
            .catch(console.error);
    }

    parse(response) {
        try {
            const rawStyles = ResponseParser.getRawStyles(response);
            this.setState({'rawStyles': rawStyles});

            const newStyles = ResponseParser.processRawStyles(rawStyles);
            this.updateStyles(newStyles);
            this.updateMessages('Done!', APP);
        }
        catch (error) {
            this.updateMessages(error.message, APP);
        }
    }

    expandMessages() {
        this.setState({'expandMessages': true});
    }

    clearStyles() {
        this.setState({'styles': this.initialStyles});
        this.updateMessages('Restored default styles', APP);
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
                          buttonHtml={this.state.buttonHtml}
                          styles={this.state.styles}/>
                <Footer />
            </Layout>
        );
    }
}



