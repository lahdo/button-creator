import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import "./CodeView.module.css"

export default class CodeView extends Component {
    render() {
        return (
            <div>
                <Grid className="codeView">
                    <Row>
                        <div>
                            <Col md={4} mdOffset={2}>
                                <h4>CSS</h4>
                                <pre>.my-button {JSON.stringify(this.props.styles, null, 2)}</pre>
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
