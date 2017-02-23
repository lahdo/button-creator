import React, {Component} from 'react';
import {each} from 'lodash';
import fetch from 'isomorphic-fetch';
import {Wit, log} from 'node-wit';
import {find} from 'lodash';
import has from 'lodash/has';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import ButtonView from '../components/ButtonView.js';
import StoryInputView from '../components/StoryInputView.js';
import CodeView from '../components/CodeView.js';
import MessagesView from '../components/MessagesView.js';

import cssAttributes from '../other/cssAttributesShort';

const WITAIKEY = 'PU3QOHZ5YLQ364OR4PVTGLVWO5SKS5K3';

export default class ButtonCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonHtml: '',
            styles: {},
            message: '',
            messages: []
        };

        this.cssAttributes = cssAttributes;

        this.setMessage = this.setMessage.bind(this);
        this.understandMessage = this.understandMessage.bind(this);
        this.processMessage = this.processMessage.bind(this);
        this.parseResponse = this.parseResponse.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
        ButtonCreator.convertAttribute = ButtonCreator.convertAttribute.bind(this);
    }

    componentDidMount() {
        this.setState({'buttonHtml': '<button class="my-button"></button>'});
        this.client = new Wit({accessToken: WITAIKEY});
    }

    setMessage(message) {
        this.setState({'message': message});
    }

    processMessage(message) {
        this.understandMessage(message);

        const messages = [
            ...this.state.messages
        ];

        messages.push({'body': message});

        this.setState({'messages': messages});


    }

    understandMessage(message) {
        this.client.message(message, {})
            .then((response) => {
                this.parseResponse(response);
                console.log('Yay, got Wit.ai response: ' + JSON.stringify(response));
            })
            .catch(console.error);
    }

    parseResponse(response) {
        const styles = {
            ...this.state.styles
        };

        const rawStyles = {
            attributes: [],
            values: [],
            units: []
        };

        if (has(response.entities, 'attribute')) {
            each(response.entities.attribute, function (attribute) {
                rawStyles.attributes.push(ButtonCreator.convertAttribute(attribute.value));
            }.bind(this));
        }

        if (has(response.entities, 'unit')) {
            each(response.entities.unit, function (unit) {
                rawStyles.units.push(unit.value);
            }.bind(this));
        }

        if (has(response.entities, 'value')) {
            each(response.entities.value, function (value) {
                rawStyles.values.push(value.value);
            }.bind(this));
        }

        each(rawStyles.attributes, function (attribute, index) {
            const currentAttribute = find(this.cssAttributes, (item) => item.name === attribute);

            if (currentAttribute && !currentAttribute.hasUnit) {
                rawStyles.units.splice(index, 0, '')
            }

            if (rawStyles.units[index]) {
                styles[attribute] = rawStyles.values[index] + rawStyles.units[index];
            }
            else {
                styles[attribute] = rawStyles.values[index];
            }

        }.bind(this));

        this.updateStyles(styles);
    }

    static convertAttribute(attribute) {
        return attribute.replace(/-([a-z])/gi, function (s, group1) {
            return group1.toUpperCase();
        })
    }

    updateStyles(styles) {
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



