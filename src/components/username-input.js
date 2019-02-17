import React from 'react';
import { Form, Button } from 'react-bootstrap';

class UsernameInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.state = {
      username: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    this.props.updateUsername(username);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Control
            placeholder="Input your username here"
            value={this.props.username}
            onChange={this.handleUsernameChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update username
        </Button>
      </Form>
    );
  }
}

export default UsernameInput;
