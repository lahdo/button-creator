import React, {Component} from 'react';
import {each} from 'lodash';
import fetch from 'isomorphic-fetch';
import {Wit, log} from 'node-wit';
import fromCSS from 'react-css';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import ButtonView from '../components/ButtonView.js';
import StoryView from '../components/StoryView.js';

const WITAIKEY = 'PU3QOHZ5YLQ364OR4PVTGLVWO5SKS5K3';

export default class ButtonCreator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            styles: {},
            message: ''
        };

        this.rawStyles = {};

        this.cssAttributes = [
            {
                name: ''
            }
        ];

        this.setMessage = this.setMessage.bind(this);
        this.understandMessage = this.understandMessage.bind(this);
        this.parseResponse = this.parseResponse.bind(this);
        this.updateStyles = this.updateStyles.bind(this);
    }

    componentDidMount() {
        this.client = new Wit({accessToken: WITAIKEY});
    }

    setMessage(message) {
        this.setState({'message': message});
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
        // response.entities.attributes.forEach(
        //     (attribute) => this.rawStyles.attributes.push(attribute)
        // );
        //
        // response.entities.units.forEach(
        //     (unit) => this.rawStyles.units.push(unit)
        // );
        //
        // response.entities.values.forEach(
        //     (value) => this.rawStyles.values.push(value)
        // );

        this.updateStyles(fromCSS.fromCSS("{ 'background-color': 'red'; }"));
    }

    updateStyles(styles) {
        this.setState({'styles': styles});
    }

    render() {
        return (
            <Layout>
                <NavBar />
                <ButtonView styles={this.state.styles}
                            message={this.state.message}/>
                <StoryView setMessage={this.setMessage}
                           understandMessage={this.understandMessage}
                           message={this.state.message}/>
                <Footer />
            </Layout>
        );
    }
}



