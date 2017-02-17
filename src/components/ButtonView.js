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
                                    className="initialButton center-block btn-lg"
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
                    <Row>
                        <div className="codeView">
                            <Col md={3} mdOffset={3}>
                                <h4>HTML</h4>
                                <pre>html code here</pre>
                                {/*<pre dangerouslySetInnerHTML={{__html: "<button class=""></button>"}}></pre>*/}
                            </Col>
                            <Col md={3}>
                                <h4>CSS</h4>
                                <pre>{this.props.message}</pre>
                                {/*<pre>*/}
                                {/*.my-button {*/}
                                {/*background: red;*/}
                                {/*padding: 20px;*/}
                                {/*}*/}
                                {/*</pre>*/}
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        );
    }
}
