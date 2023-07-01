import React from 'react';
import { Link } from 'react-router-dom';

const ChatList = ({ chats, onNewChat, onDeleteChat }) => {
  return (
    <div className="left-navigation">
      <button className="new-chat-button" onClick={onNewChat}>
        New Chat
      </button>
      <ul className="chat-list">
        {chats.map((chat) => (
          <li key={chat.id} className="chat-item">
            <Link to={`/chats/${chat.id}`}>Chat {chat.id}</Link>
            <span className="delete-icon" onClick={() => onDeleteChat(chat.id)}>
              &#x2716;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
