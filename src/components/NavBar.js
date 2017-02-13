import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import "./NavBarView.module.css"

export default class NavBar extends Component {
    render() {
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><strong>Button Creator</strong>. Generate <span className="pre">code</span> for a button from User Story.</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}

