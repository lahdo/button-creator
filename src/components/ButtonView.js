import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import "./ButtonView.module.css"
import * as Utils from "../lib/Utils";

export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        window.location.href = Utils.normalizeUrl(this.props.buttonUrl);
    }

    render() {
        return (
            <div>
                <Grid className="buttonView">
                    <Row className="buttonContainer">
                        <Col md={12}>
                            <div className="center-block">
                                <Button
                                    className={this.props.buttonCssClass}
                                    style={this.props.styles}
                                    onClick={this.handleOnClick}
                                    block={true}
                                    bsStyle="default">
                                    {this.props.buttonText}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            < hr/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
