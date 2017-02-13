import React, {Component} from 'react';
import {each} from 'lodash';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';
import ButtonView from '../components/ButtonView.js';
import StoryView from '../components/StoryView.js';

export default class MapView extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     heatmapData: [],
        //     currentCountry: countries[0],
        //     countries: countries
        // };
    }

    componentDidMount() {
    }

    render() {
        return (
            <Layout>
                <NavBar />
                <ButtonView />
                <StoryView />
                <Footer />
            </Layout>
        );
    }
}

