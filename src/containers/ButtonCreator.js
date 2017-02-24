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

export default class ButtonCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonHtml: '',
            styles: {},
            message: '',
            messages: [],
            context: {}
        };

        this.setMessage = this.setMessage.bind(this);
        this.understandMessage = this.understandMessage.bind(this);
        this.processMessage = this.processMessage.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
        this.updateMessages = this.updateMessages.bind(this);
    }

    componentDidMount() {
        const initialHtml = '<button class="my-button"></button>';

        this.setState({'buttonHtml': initialHtml});
        this.client = new Wit({accessToken: WITAIKEY});
    }

    setMessage(message) {
        this.setState({'message': message});
    }

    processMessage(message) {
        const normalizedMessage = MessageNormalizer.normalize(message);
        this.understandMessage(normalizedMessage);
        this.updateMessages(message);
    }

    understandMessage(message) {
        this.client.message(message, {})
            .then((response) => {
                const newStyles = ResponseParser.parse(response);
                this.updateStyles(newStyles);
                // console.log('Yay, got Wit.ai response: ' + JSON.stringify(response));
            })
            .catch(console.error);
    }

    updateMessages(message) {
        const messages = [...this.state.messages];
        messages.push({'body': message});
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
                <MessagesView messages={this.state.messages}/>
                <StoryInputView setMessage={this.setMessage}
                                processMessage={this.processMessage}
                                message={this.state.message}/>
                <CodeView buttonHtml={this.state.buttonHtml}
                          styles={this.state.styles}/>
                <Footer />
            </Layout>
        );
    }
}



