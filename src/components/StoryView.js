import React, {Component} from 'react';
import {Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import "./StoryView.module.css"

export default class StoryView extends Component {
    render() {
        return (
            <div>
                <Grid className="storyView">
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <form>
                                <FormGroup controlId="buttonDescription">
                                    <ControlLabel> </ControlLabel>
                                    <FormControl
                                        componentClass="textarea"
                                        placeholder="How should your button look like?"
                                        rows="5"
                                        id="comment"></FormControl>
                                    <FormControl.Feedback />
                                    {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
                                </FormGroup>
                                <Button
                                    type="submit"
                                    className="apply pull-right"
                                    onClick={this.open}
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