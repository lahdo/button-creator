import React, {Component} from 'react';
import has from 'lodash/has';
import './StoryInputView.module.css';
import './Recorder.module.css';
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css'
import wordsToNumbers from 'words-to-numbers';

export default class Speak extends Component {
    constructor(props) {
        super(props);

        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.initializeMicrophone = this.initializeMicrophone.bind(this);
        this.tryCatchDecorator = this.tryCatchDecorator.bind(this);
    }

    componentDidMount() {
        this.mic = this.initializeMicrophone();
    }

    tryCatchDecorator(fn) {
        return (...args) => {
            try {
                fn(args);
            }
            catch (error) {
                this.props.setExpandMessages(true);
                this.props.updateMessages(error.message, this.props.constants.APP);
            }
        };
    }

    initializeMicrophone() {
        const mic = new window.Wit.Microphone();

        mic.onconnecting = this.tryCatchDecorator(() => {
        });
        mic.ondisconnected = this.tryCatchDecorator(() => {
        });
        mic.onready = this.tryCatchDecorator(() => {
        });
        mic.onaudiostart = this.tryCatchDecorator(() => {
        });
        mic.onaudioend = this.tryCatchDecorator(() => {
        });

        mic.onresult = this.tryCatchDecorator((args) => {
            const [intent, entities, response] = args;

            if (has(response, 'msg_body') && response.msg_body.length) {
                const message = wordsToNumbers(response.msg_body) || response.msg_body;
                this.props.setExpandMessages(true);
                this.props.processMessage(message);
            }
            else {
                throw new Error('Sorry I don\'t understand');
            }
        });

        mic.onerror = this.tryCatchDecorator((err) => {
            throw new Error('Sorry there was an error with speech recognition subsystem');
        });

        mic.connect(this.props.constants.WITAI_KEY);

        return mic;
    }

    startRecording(event) {
        // this.props.startRecording();
        this.mic.start();
        this.props.setShowSpeakButton(false);
        event.preventDefault();
    }

    stopRecording(event) {
        // this.props.stopRecording();
        this.mic.stop();
        this.props.setShowSpeakButton(true);
        event.preventDefault();
    }

    render() {
        return (
            <div className="inline">
                <a href="#"
                   className={this.props.showSpeakButton ? '' : 'set-display-none'}
                   onClick={this.startRecording}>
                    Speak
                </a>
                <span className={this.props.showSpeakButton ? 'set-display-none' : ''}>
                    <FontAwesome className="text-danger Blink"
                                 name='circle'/>
                    <a href="#"
                       onClick={this.stopRecording}>
                        Stop
                    </a>
                </span>
            </div>
        );
    }
}