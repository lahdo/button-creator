import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import "./StoryInputView.module.css"
import Recorder from './Recorder.js';
import MessageInput from '../components/MessageInput.js';

export default class StoryInputView extends Component {
    constructor(props) {
        super(props);

        this.clearStyles = this.clearStyles.bind(this);
    }

    clearStyles(event) {
        this.props.clearStyles();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Grid className="storyInputView">
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <MessageInput setMessage={this.props.setMessage}
                                          processMessage={this.props.processMessage}
                                          expandMessages={this.props.expandMessages}
                                          showClearStylesButton={this.props.expandMessages}
                                          message={this.props.message}
                            />
                            <Recorder constants={this.props.constants}
                                      updateMessages={this.props.updateMessages}
                                      processMessage={this.props.processMessage}
                                      startRecording={this.props.startRecording}
                                      stopRecording={this.props.stopRecording}
                                      setShowSpeakButton={this.props.setShowSpeakButton}
                                      showSpeakButton={this.props.showSpeakButton}
                                      setExpandMessages={this.props.setExpandMessages}
                            />
                            <span className={this.props.showClearStylesButton ? '' : 'set-display-none'}>   |  </span>
                            <a href="#"
                               className={this.props.showClearStylesButton ? '' : 'set-display-none'}
                               onClick={this.clearStyles}>
                                Clear styles
                            </a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}