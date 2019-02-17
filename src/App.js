import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chat from './components/chat-window';
import CommentInput from './components/comment-input';
import UsernameInput from './components/username-input';
import { createSocket, getMessages } from './utils/chat-utils';
import update from 'immutability-helper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
    this.state = {
      messages: [],
      username: 'anonymous'
    };
  }

  async componentDidMount() {
    this.chatSocket = createSocket();
    const messageResult = await getMessages();
    const messages = messageResult.data;
    this.setState(() => {
      return { messages };
    });

    this.chatSocket.on('chat message', msg => {
      this.setState(state => {
        // msg is a 1 element array
        const newMessages = update(this.state.messages, { $push: msg });
        return { messages: newMessages };
      });
    });
  }

  sendMessage(message) {
    this.chatSocket.emit('chat message', {
      message: message,
      username: this.state.username
    });
  }

  updateUsername(username) {
    this.setState(() => {
      return { username: username };
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col className="chat-container">
              <Chat messages={this.state.messages} />
              <CommentInput sendMessage={this.sendMessage} />
              <UsernameInput updateUsername={this.updateUsername} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
