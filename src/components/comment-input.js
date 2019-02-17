import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChatMessageChange = this.handleChatMessageChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const chatMessage = this.state.username;
    this.props.sendMessage(chatMessage);
    this.setState(() => {
      return { username: '' };
    });
  }

  handleChatMessageChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formChatMessage">
          <Form.Control
            placeholder="Input text here and press Enter to chat"
            value={this.state.username}
            onChange={this.handleChatMessageChange}
          />
        </Form.Group>

        <Button className="hidden" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CommentInput;
