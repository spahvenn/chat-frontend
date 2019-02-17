import React from 'react';

class ChatWindow extends React.Component {
  componentDidMount() {
    // Some timing issue with not scrolling all the way down
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  renderMessages() {
    const messageElems = this.props.messages.map((msg, i) => {
      return (
        <div key={i}>
          <span>{msg.username}: </span>
          <span>{msg.message}</span>
        </div>
      );
    });
    return messageElems;
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <div className="chat">
        {this.renderMessages()}
        <div
          className="messages-end"
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );
  }
}

export default ChatWindow;
