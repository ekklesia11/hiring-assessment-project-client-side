import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Todos from './components/Todos'
import Board from './components/Board'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Todos} />
        <Route path='/posts' component={Board} />
      </div>
    </Router>
  );
}

export default App;
