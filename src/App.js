import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import TodoList from './pages/TodoList';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/todolist" component={ TodoList } />
    </Switch>
  );
};

export default App;
