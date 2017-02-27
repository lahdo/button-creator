import React, {Component} from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import "./MessagesView.module.css"
import ReactDOM from 'react-dom';

export default class MessagesView extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div>
                <Grid className="messagesView">
                    <Row>
                        <div className="codeView">
                            <Col md={8} mdOffset={2}>
                                    <div ref={(el) => {
                                        this.messagesContainer = el;
                                    }}
                                         className={"chat custom-scroll " + (this.props.expandMessages ? 'expanded' : '') }>
                                        {
                                            this.props.messages.map(function (message, i) {
                                                return (
                                                    <div className="bubbleContainer" key={i}>
                                                        <div className={"bubble " + message.sender}>
                                                            {message.body}
                                                        </div>
                                                    </div>
                                                );
                                            }, this)
                                        }
                                    </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </div>
        );
    }
}
