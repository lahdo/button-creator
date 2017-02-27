import React, {Component} from 'react';
import {Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap';
import "./StoryInputView.module.css"

export default class StoryInputView extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.clearStyles = this.clearStyles.bind(this);
    }

    handleChange(event) {
        this.props.setMessage(event.target.value);
    }

    handleKeyChange(event) {
        if (event.key === 'Enter' && this.props.message.trim() !== '') {
            event.preventDefault();
            this.props.processMessage(this.props.message);
            this.props.setMessage('');
            this.props.expandMessages();
        }
    }

    clearStyles(event) {
        this.props.clearStyles();
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Grid className="storyInputView">
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="buttonDescription">
                                    <ControlLabel> </ControlLabel>
                                    <FormControl
                                        onKeyPress={this.handleKeyChange}
                                        onChange={this.handleChange}
                                        value={this.props.message}
                                        autoComplete="off"
                                        placeholder="How should your button look like?"
                                        rows="1">
                                    </FormControl>
                                    <FormControl.Feedback />
                                </FormGroup>
                                <a href="#"
                                   className={this.props.showClearStylesButton ? '' : 'make-not-shown'}
                                   onClick={this.clearStyles}>Clear styles</a>
                                {/*onClick={() => this.props.setMessage(this.props.inputMessage)}*/}
                                {/*<Button*/}
                                {/*type="submit"*/}
                                {/*className="apply pull-right"*/}
                                {/*block={true}*/}
                                {/*bsStyle="info">*/}
                                {/*Apply*/}
                                {/*</Button>*/}
                            </form>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}