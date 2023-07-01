import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import ChatApp from './components/ChatApp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatApp/>} />
        <Route path="/chats/:id" element={<ChatApp/>} />
      </Routes>
    </Router>
  );
};

export default App;
