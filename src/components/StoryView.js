import React, {Component} from 'react';
import {Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import "./StoryView.module.css"

export default class StoryView extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.setMessage(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.understandMessage(this.props.message);
        this.props.setMessage('');
    }

    render() {
        return (
            <div>
                <Grid className="storyView">
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="buttonDescription">
                                    <ControlLabel> </ControlLabel>
                                    <FormControl
                                        onChange={this.handleChange}
                                        value={this.props.message}
                                        componentClass="textarea"
                                        placeholder="How should your button look like?"
                                        rows="5">
                                    </FormControl>
                                    <FormControl.Feedback />
                                </FormGroup>
                                {/*onClick={() => this.props.setMessage(this.props.inputMessage)}*/}
                                <Button
                                    type="submit"
                                    className="apply pull-right"
                                    block={true}
                                    bsStyle="info">
                                    Apply
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}