import React, { useState } from 'react';

const ChatDisplay = ({ chat, onMessageSend, onNewChat }) => {
  const [newMessage, setNewMessage] = useState('');
  const [creatingChat, setCreatingChat] = useState(true); 
  
  const handleMessageSend = () => {
    if (newMessage.trim() !== '') {
      onMessageSend(chat.id, newMessage);
      setNewMessage('');
    }
  };

  const handleNewChat = () => {
    setCreatingChat(false);
    onNewChat(); 
  };

  return (
    <div className="chat-display">
      {creatingChat ? (
         <div className="start-creating-chat" >
         <div>
           <h1>Chat Connect</h1>
           <p style={{ margin: '40px',  }}>
             Welcome to our chat application! We're excited to connect with you and provide assistance. 
             To start a new chat, simply click on the "New Chat" button and begin typing your message.
           </p>
           <button onClick={handleNewChat} className='new-chat-btn'> New Chat </button>
         </div>
       </div>
        
      ) : (
        <React.Fragment>
          <div className="chat-header">Chat {chat ? chat.id : ''}</div>
          <div className="message-display">
            {chat &&
              chat.messages.map((message, index) => (
                <div
                  key={index}
                  className={`message-item ${message.sender === 'self' ? 'self' : 'other'}`}
                >
                  {message.content}
                </div>
              ))}
          </div>
          <div className="chat-input">
            <textarea
              className="message-input"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="send-button" onClick={handleMessageSend}>
              Send
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ChatDisplay;
