import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import "./StoryInputView.module.css"

export default class MessageInput extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
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
                    {/*onClick={() => this.props.setMessage(this.props.inputMessage)}*/}
                    {/*<Button*/}
                    {/*type="submit"*/}
                    {/*className="apply pull-right"*/}
                    {/*block={true}*/}
                    {/*bsStyle="info">*/}
                    {/*Apply*/}
                    {/*</Button>*/}
                </form>
            </div>
        );
    }
}