import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChatList from './ChatList';
import ChatDisplay from './ChatDisplay';

const ChatApp = () => {
  const [chats, setChats] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNewChat = () => {
    const newChat = {
      id: chats.length + 1,
      messages: [],
    };
    setChats([...chats, newChat]);
    navigate(`/chats/${newChat.id}`);
  };

  const handleDeleteChat = (chatId) => {
    setChats(chats.filter((chat) => chat.id !== chatId));
    navigate('/');
  };

  const handleMessageSend = (chatId, message) => {
    const updatedChats = chats.map((chat) => {
      if (chat.id === parseInt(chatId, 10)) {
        return {
          ...chat,
          messages: [...chat.messages, { sender: 'self', content: message }],
        };
      } else {
        return {
          ...chat,
          messages: [...chat.messages, { sender: 'other', content: message }],
        };
      }
    });
    setChats(updatedChats);
  };

  const selectedChat = chats.find((chat) => chat.id === parseInt(id, 10));

  return (
    <div className="chat-app">
      <ChatList chats={chats} onNewChat={handleNewChat} onDeleteChat={handleDeleteChat} />
      <ChatDisplay chat={selectedChat} onMessageSend={handleMessageSend} onNewChat={handleNewChat}/>
    </div>
  );
};

export default ChatApp;
