import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import "./ButtonView.module.css"

export default class ButtonView extends Component {
    render() {
        return (
            <div>
                <Grid className="buttonView">
                    <Row className="buttonContainer">
                        <Col md={12}>
                            <div className="center-block">
                                <Button
                                    className="center-block btn-lg"
                                    style={this.props.styles}
                                    onClick={this.open}
                                    block={true}
                                    bsStyle="default">
                                    Your Button
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
