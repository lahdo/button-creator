import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import "./CodeView.module.css"
import Utils from '../other/Utils'

export default class CodeView extends Component {
    render() {
        return (
            <div>
                <Grid className="codeView">
                    <Row>
                        <div>
                            <Col md={4} mdOffset={2}>
                                <h4>Raw Styles</h4>
                                <pre>{JSON.stringify(this.props.rawStyles, null, 2)}</pre>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <Col md={4} mdOffset={2}>
                                <h4>CSS</h4>
                                <pre>
                                    .my-button
                                    {
                                        JSON.stringify(
                                            Utils.convertStylesAttributes(this.props.styles)
                                            , null, 2)
                                    }
                                </pre>
                            </Col>
                            <Col md={4}>
                                <h4>HTML</h4>
                                <pre>{this.props.buttonHtml}</pre>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        );
    }
}
