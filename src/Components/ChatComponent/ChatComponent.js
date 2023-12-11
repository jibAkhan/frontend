import React, { useState, useEffect, useRef } from 'react';
import './ChatComponent.scss';

const DefaultAvatar = () => (
  <svg
    className="avatar"
    width="30"
    height="30"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M512 512c141.384 0 256-114.616 256-256S653.384 0 512 0 256 114.616 256 256s114.616 256 256 256zm0 64c-165.688 0-512 82.824-512 256v64h1024v-64c0-173.176-346.312-256-512-256z"
      fill="#9E9E9E"
    />
  </svg>
);

const Chatbox = ({ msg, isOutgoing, timestamp }) => {
  const bubbleClass = isOutgoing ? 'chatbox-outgoing' : 'chatbox-incoming';
  return (
    <div className={`chatbox ${bubbleClass}`}>
      {!isOutgoing && <DefaultAvatar />}
      <div className="message">
        <div className="text">{msg}</div>
        <div className="time">{timestamp}</div>
      </div>
    </div>
  );
};

const ChatComponent = () => {
  const [conn, setConn] = useState(null);
  const [log, setLog] = useState([]);
  const msgRef = useRef(null);
  const userId = useRef(Math.random().toString(36).substring(7));
  const chatPanelRef = useRef(null);

  const scrollToBottom = () => {
    chatPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const appendLog = (item) => {
    setLog((prevLog) => [...prevLog, item]);
  };

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/chat");

    socket.onopen = () => {
      appendLog({ type: 'status', message: 'You have connected to the chat.' });
    };

    socket.onclose = () => {
      //appendLog({ type: 'status', message: 'A user disconnected from the chat.' });
    };

    socket.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      const isOutgoing = message.sender === userId.current;
      appendLog({ type: 'message', message: message.message, isOutgoing, timestamp: new Date().toLocaleTimeString() });
    };

    setConn(socket);

    return () => {
      socket.close();
    };
  }, []);

  useEffect(scrollToBottom, [log]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (conn && msgRef.current.value) {
      const message = msgRef.current.value;
      const messageObj = { sender: userId.current, message };
      conn.send(JSON.stringify(messageObj));
      msgRef.current.value = '';
    }
  };

  return (
    <div className="chat">
      <div className="chat-panel">
        {log.map((item, index) => (
          <Chatbox key={index} msg={item.message} isOutgoing={item.isOutgoing} timestamp={item.timestamp} />
        ))}
        <div ref={chatPanelRef} />
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input type="text" ref={msgRef} className="form-control" placeholder="Write your message..." aria-label="Write your message" autoFocus />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ChatComponent;
