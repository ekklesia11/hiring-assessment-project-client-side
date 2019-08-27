import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Todos from './components/Todos'
import Board from './components/Board'
import EachUser from './components/EachUser'
import UserTodo from './components/UserTodo'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Todos} />
        <Route exact path='/users/:id' component={EachUser} />
        <Route path='/users/:id/todos' component={UserTodo} />
        <Route path='/posts' component={Board} />
      </div>
    </Router>
  );
}

export default App;
