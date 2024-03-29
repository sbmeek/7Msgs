import React from 'react';
import './App.css'
import Chat from './components/Chat/Chat';
import Main from './components/Main/Main';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
